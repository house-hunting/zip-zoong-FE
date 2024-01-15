import React, { useState, useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}
const WriteMapPage: React.FC = () => {
  const { kakao } = window;
  const [markers, setMarkers] = useState<any[]>([]);
  const [map, setMap] = useState<any | null>(null);
  const [infowindow] = useState(new kakao.maps.InfoWindow({ zIndex: 1 }));
  const [keyword, setKeyword] = useState<string>("맛집");
  const [pagination, setPagination] = useState<any | null>(null);

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    const kakaoMap = new kakao.maps.Map(mapContainer, mapOption);
    setMap(kakaoMap);
  }, []);

  const searchPlaces = async () => {
    const ps = new kakao.maps.services.Places();
    try {
      const { data, status, pagination } = await ps.keywordSearch(keyword);
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
        displayPagination(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error occurred during search:", error);
    }
  };

  const displayPlaces = (places: any[]) => {
    const listEl = document.getElementById("placesList");
    const menuEl = document.getElementById("menu_wrap");
    const bounds = new kakao.maps.LatLngBounds();
    removeAllChildNodes(listEl);

    removeMarker();

    places.forEach((place, index) => {
      const placePosition = new kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(placePosition, index);
      const itemEl = getListItem(index, place);

      bounds.extend(placePosition);

      kakao.maps.event.addListener(marker, "mouseover", () => {
        displayInfowindow(marker, place.place_name);
      });

      kakao.maps.event.addListener(marker, "mouseout", () => {
        infowindow.close();
      });

      itemEl.onmouseover = () => {
        displayInfowindow(marker, place.place_name);
      };

      itemEl.onmouseout = () => {
        infowindow.close();
      };

      listEl?.appendChild(itemEl);
    });

    menuEl?.scrollTo(0, 0);
    map?.setBounds(bounds);
  };

  const getListItem = (index: number, place: any) => {
    const el = document.createElement("li");
    // 원래는 const로 선언해줬지만 상수특성상 변수인 let으로 바꿔줌
    let itemStr =
      '<span class="markerbg marker_' +
      (index + 1) +
      '"></span>' +
      '<div class="info">' +
      "   <h5>" +
      place.place_name +
      "</h5>";

    if (place.road_address_name) {
      itemStr +=
        "    <span>" +
        place.road_address_name +
        "</span>" +
        '   <span class="jibun gray">' +
        place.address_name +
        "</span>";
    } else {
      itemStr += "    <span>" + place.address_name + "</span>";
    }

    itemStr += '  <span class="tel">' + place.phone + "</span>" + "</div>";

    el.innerHTML = itemStr;
    el.className = "item";

    return el;
  };

  const addMarker = (position: any, idx: number) => {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    const imageSize = new kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691),
      spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
      offset: new kakao.maps.Point(13, 37),
    };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
    const marker = new kakao.maps.Marker({
      position: position,
      image: markerImage,
    });

    marker.setMap(map);
    setMarkers((prevMarkers) => [...prevMarkers, marker]);

    return marker;
  };

  const removeMarker = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const displayPagination = (pagination: any) => {
    const paginationEl = document.getElementById("pagination");
    const fragment = document.createDocumentFragment();

    while (paginationEl?.hasChildNodes()) {
      paginationEl.removeChild(paginationEl.lastChild as Node);
    }

    for (let i = 1; i <= pagination.last; i++) {
      const el = document.createElement("a");
      el.href = "#";
      el.innerHTML = i.toString();

      if (i === pagination.current) {
        el.className = "on";
      } else {
        el.onclick = () => {
          pagination.gotoPage(i);
        };
      }

      fragment.appendChild(el);
    }

    paginationEl?.appendChild(fragment);
  };

  const displayInfowindow = (marker: any, title: string) => {
    const content = '<div style="padding:5px;z-index:1;">' + title + "</div>";
    infowindow.setContent(content);
    infowindow.open(map, marker);
  };

  const removeAllChildNodes = (el: HTMLElement | null) => {
    while (el?.hasChildNodes()) {
      el.removeChild(el.lastChild as Node);
    }
  };

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}
      ></div>

      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                searchPlaces();
              }}
            >
              키워드 :{" "}
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                id="keyword"
                size={15}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  );
};

export default WriteMapPage;
