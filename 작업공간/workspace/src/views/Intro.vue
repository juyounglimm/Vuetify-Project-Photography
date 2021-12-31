<template>
  <div class="introblock">
    <v-container>
      <v-simple-table class="simpletable">
        <tr class="regiontable">
          <td class="region">
            지역별
          </td>
          <td class="seoul">
            <v-checkbox
              v-model="checkbox"
              :label="`서울`"
            />
          </td>
          <td>
            <v-checkbox
              v-model="checkbox"
              :label="`경기`"
            />
          </td><td>
            <v-checkbox
              v-model="checkbox"
              :label="`인천`"
            />
          </td>
          <td>
            <v-checkbox
              v-model="checkbox"
              label="부산"
            />
          </td>
          <td>
            <v-checkbox
              v-model="checkbox"
              :label="`대구`"
            />
          </td>
          <td>
            <v-checkbox
              v-model="checkbox"
              :label="`대전`"
            />
          </td>
        </tr>
        <tr class="interiortable">
          <td class="interior">인테리어</td>
          <td>
            <v-checkbox
              v-model="checkbox"
              :label="`모던`"
            />
          </td>
          <td>
            <v-checkbox
              v-model="checkbox"
              :label="`미니멀`"
            />
          </td>
          <td>
            <v-checkbox
              v-model="checkbox"
              :label="`빈티지`"
            />
          </td>
          <td colspan="3">
            <v-checkbox
              v-model="checkbox"
              :label="`인더스트리얼`"
            />
          </td>

        </tr>
      </v-simple-table>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          cols="3"
        >
 <router-link :to="{name:'Detail',params:{id:`${item.id}`,subtitle:`${item.subtitle}`,discription:`${item.discription}`,src:`${item.src}`,address:`${item.address}`,phone:`${item.phone}`,sigmenu:`${item.sigmenu}`,price:`${item.price}`,parking:`${item.parking}`,open:`${item.open}`,close:`${item.close}`,site:`${item.site}`}}">
          <v-card
            class="mx-auto"
            max-width="400"
          >
           <router-link :to="{name:'Detail',params:{id:`${item.id}`,subtitle:`${item.subtitle}`,discription:`${item.discription}`,src:`${item.src}`,address:`${item.address}`,phone:`${item.phone}`,sigmenu:`${item.sigmenu}`,price:`${item.price}`,parking:`${item.parking}`,open:`${item.open}`,close:`${item.close}`,site:`${item.site}`}}">
            <v-img

              class="white--text align-end"
              height="200px"
              :src="item.src"
            />
           </router-link>
            <v-card-subtitle class="pb-0">
              <div class="subt">
                {{ item.subtitle }}
              </div>
            </v-card-subtitle>
               <v-rating
          :value="item.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

            <v-card-text class="text--primary">
              <div class="disc">
             <span>{{ item.discription }}</span>
                <span>{{item.discription1}}</span>
               <span> {{item.discription2}}</span>
              </div>
            </v-card-text>

            <!-- <v-card-actions>
              <v-btn class="morebtn"

                text

              >
                 <router-link :to="`/${item.id}`">More</router-link>  -
                <router-link :to="{name:'Detail',params:{id:`${item.id}`,subtitle:`${item.subtitle}`,discription:`${item.discription}`,src:`${item.src}`,address:`${item.address}`,phone:`${item.phone}`,sigmenu:`${item.sigmenu}`,price:`${item.price}`,parking:`${item.parking}`,open:`${item.open}`,close:`${item.close}`,site:`${item.site}`}}">
                  More
                </router-link>
              </v-btn>
            </v-card-actions> -->
          </v-card>
 </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


  export default {
    name: 'CafeIntro',

    data() {
        return{
            items:[
               { id:1,
                 subtitle:"새들러하우스",
                 discription: "#서울",
                 discription1:"인더스트리얼",
                 discription2:"#크로플",
                  address:"서울 강남구 도산대로17길 10",
                  rate:3.0,
                  phone:"070-8265-5541",
                  sigmenu:"크로플",
                  price:"만원대",
                  parking:"발렛가능",
                  open:"11:00 - 22:00",
                  close:"월요일",
                  site:"https://www.instagram.com/saddlerseoul/",
                 src:"https://mp-seoul-image-production-s3.mangoplate.com/383472/1423683_1639476522904_11361"

               },
               {
                id:2,
                 subtitle:"듁스커피",
                 discription: "#서울",
                 discription1:"#커피",
                 discription2:"#모던",
                 address:"서울특별시 마포구 어울마당로2길 10",
                 rate:3.5,
                  phone:"02-323-2007",
                  sigmenu:"듁스화이트",
                  price:"만원미만",
                  parking:"유료주차가능",
                  open:"월-금: 09:00 - 18:00/토-일: 11:00 - 19:00",
                  close:"없음",
                  site:"https://www.instagram.com/dukes_coffee_korea/",
                 src:"https://mp-seoul-image-production-s3.mangoplate.com/1047892_1629169887164656.jpg"
               },

                {
                id:3,
                 subtitle:"태양커피",
                 discription: "#서울",
                  discription1:"#미니멀",
                 discription2:"#커피",
                 address:"서울 서초구 서초대로25길 55 1층",
                 rate:4.0,
                  phone:"0507-1426-8181",
                  sigmenu:"아인슈페너",
                  price:"만원미만",
                  parking:"근처 공영주차장",
                  open:"09:00 - 22:00",
                  close:"월요일",
                  site:"없음",
                 src:"https://mp-seoul-image-production-s3.mangoplate.com/1247431_1602830964399813.jpg"
               },
                {
                id:4,
                 subtitle:"페더커피",
                 discription: "#서울",
                  discription1:"#모던",
                 discription2:"#디저트",
                  address:"서울 강동구 진황도로 123 광남캐스빌아파트상가 101호",
                  rate:4.0,
                  phone:"070-4118-0578",
                  sigmenu:"애플크럼블",
                  price:"만원미만",
                  parking:"불가",
                  open:"11:00 - 22:00",
                  close:"일요일",
                  site:"https://www.instagram.com/feather_coffee/",
                 src:"https://mp-seoul-image-production-s3.mangoplate.com/345378/1089220_1600691161071_19929"
               },
                 {
                id:5,
                 subtitle:"쇼토",
                 discription: "#서울",
                  discription1:"#미니멀",
                 discription2:"#케이크",
                  address:"서울 강남구 압구정로18길 14-6 1층",
                  rate:3.5,
                  phone:"0507-1324-3625",
                  sigmenu:"쇼트케이크",
                  price:"만원미만",
                  parking:"가능",
                  open:"12:00 - 21:00",
                  close:"월요일",
                  site:"https://www.instagram.com/shoto_patisserie/",
                 src:"https://mp-seoul-image-production-s3.mangoplate.com/395612/449685_1638274767500_59565"
               },
                {
                id:6,
                 subtitle:"오목눈이",
                 discription: "#서울",
                  discription1:"#미니멀",
                 discription2:"#와플",
                  address:"서울 관악구 장군봉1길 32",
                  rate:5.0,
                  phone:"02-876-1245",
                  sigmenu:"케이크",
                  price:"만원미만",
                  parking:"불가",
                  open:"12:00 - 22:00",
                  close:"월요일",
                  site:"https://www.instagram.com/omoknooni/",
                 src:"https://mp-seoul-image-production-s3.mangoplate.com/32525_1632726821632953.jpg"
               },
                {
                id:7,
                 subtitle:"맛차차",
                 discription: "#서울",
                 discription1:"#커피",
                 discription2:"#모던",
                 address:"서울 성동구 서울숲2길 18-11 1층",
                  rate:3.5,
                  phone:"0507-1313-8707",
                  sigmenu:"티 코스",
                  price:"2만원대",
                  parking:"불가",
                  open:"12:00 - 22:00",
                  close:"월요일,화요일",
                  site:"http://www.matchachaseoul.com",
                 src:"https://mp-seoul-image-production-s3.mangoplate.com/1528078_1620393537465446.jpg"
               },

                 {
                id:8,
                 subtitle:"프릳츠도화점",
                 discription: "#서울",
                  discription1:"#모던",
                 discription2:"#커피",
                  address:"서울 마포구 새창로2길 17",
                  rate:3.5,
                  phone:"02-3275-2045",
                  sigmenu:"케이크",
                  price:"만원미만",
                  parking:"불가",
                  open:"08:00 - 22:00",
                  close:"없음",
                  site:"http://www.fritz.co.kr/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180518_278%2F1526615535888dbdfa_JPEG%2F5HlllxLUmqnKtKsOuLmD6Y5c.JPG.jpg"
               },

               {
                id:9,
                 subtitle:"더티트렁크",
                 discription: "#경기",
                  discription1:"#인더스트리얼",
                 discription2:"#베이커리카페",
                  address:"경기 파주시 지목로 114",
                  rate:3.0,
                  phone:"0507-1495-9285",
                  sigmenu:"내슈빌치킨버거",
                  price:"만원대",
                  parking:"가능",
                  open:"09:00 - 22:00",
                  close:"없음",
                  site:"http://www.instagram.com/dirty_trunk_korea",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210901_96%2F1630462422350cNt6B_JPEG%2FlfKuKHiWbfr1-csu_r8LuN_x.jpeg.jpg"
               },

               {
                id:10,
                 subtitle:"카페아를",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#커피",
                  address:"경기 의정부시 동일로 204 카페 아를",
                  rate:2.5,
                  phone:"031-837-1717",
                  sigmenu:"커피",
                  price:"만원미만",
                  parking:"불가",
                  open:"10:00 - 21:00",
                  close:"없음",
                  site:"http://www.instagram.com/79cafearles",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20160923_147%2F1474614518221wherJ_JPEG%2F176873563857546_5.jpeg"
               },
               {
                id:11,
                 subtitle:"심스커피",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#파니니",
                  address:"경기 안양시 동안구 동편로183번길 12",
                  rate:3.5,
                  phone:"070-4136-8129",
                  sigmenu:"브런치",
                  price:"만원대",
                  parking:"불가",
                  open:"10:00 - 23:00",
                  close:"없음",
                  site:"없음",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190312_32%2F15523793102666Ul2S_PNG%2FFHE84iRRF5d3H6ocNZZKHg2L.png"
               },

               {
                id:12,
                 subtitle:"카페 파르베",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#브라운치즈크로플",
                  address:"경기 안양시 동안구 동편로183번길 20 FARBE",
                  rate:4.5,
                  phone:"0507-1321-9237",
                  sigmenu:"케이크",
                  price:"만원미만",
                  parking:"불가",
                  open:"10:30 - 22:00",
                  close:"없음",
                  site:"https://www.instagram.com/cafe_farbe/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210723_75%2F1626972260012Y28hQ_JPEG%2Fw4ozwn_rxv0Ph1uev31YxoAD.jpeg.jpg"
               },
                {
                id:13,
                 subtitle:"카페 헤일로",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#계곡뷰",
                  address:"경기 용인시 수지구 이종무로140번길 5 cafe Halo",
                  rate:3.5,
                  phone:"0507-1464-2239",
                  sigmenu:"헤일로 크림 블랙",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 20:00",
                  close:"없음",
                  site:"https://www.instagram.com/p/CHmviiGJKNf/?igshid=13229yxwy1huc",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201104_143%2F1604499199426gEmY7_JPEG%2FFLZ2JpI0Ch8Oul0Zh4fIIA1v.jpg"
               },

               {
                id:14,
                 subtitle:"안다미로",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#뷰",
                  address:"경기 용인시 수지구 이종무로170번길 15",
                  rate:4.0,
                  phone:"0507-1305-1393",
                  sigmenu:"햄치즈샌드위치",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 20:00",
                  close:"없음",
                   site:"https://www.instagram.com/cafe_andamiro1393/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201120_31%2F1605845680002UxLtV_JPEG%2FDrdVDlj9KQ4hfeb3hy_6P-Va.jpeg.jpg"
               },
                {
                id:15,
                 subtitle:"그래비테이트",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#애견동반",
                  address:"경기 수원시 팔달구 신풍로23번길 4 3층",
                  rate:4.0,
                  phone:"0507-1357-0344",
                  sigmenu:"뉴턴의 사과",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 20:00",
                  close:"월요일",
                  site:"https://www.instagram.com/gravitate_official/?igshid=wv8n37mqq6o9",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200926_258%2F16011046998553YR93_JPEG%2FpSlo7eGvPohGb8X29MTUkgHJ.jpg"
               },

               {
                id:16,
                 subtitle:"백금당 용인점",
                 discription: "#경기",
                 discription1:"#미니멀",
                 discription2:"#팬케이크",
                  address:"경기 용인시 기흥구 죽전로27번길 14-12 1층",
                  rate:5.0,
                  phone:"0507-1417-6741",
                  sigmenu:"헤일로 크림 블랙",
                  price:"만원미만",
                  parking:"가능",
                  open:"12:00 - 22:00",
                  close:"2번째주 월요일",
                  site:"https://www.instagram.com/baekgeumdang_yongin/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200620_165%2F1592611104728DRhuV_JPEG%2FEFJsnzz4CFq9OrZmxvZguYie.jpg"
               },
               {
                id:17,
                 subtitle:"청화공간",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#한옥",
                  address:"경기 시흥시 호현로 155-25 카페청화공간",
                  rate:4.0,
                  phone:"0507-1371-8832",
                  sigmenu:"커피",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 20:00",
                  close:"월요일",
                  site:"https://www.instagram.com/cafe_chunghwagonggan/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200907_44%2F1599488251593jl3jU_JPEG%2F4uKu_YO-JAcy75GUH9I1vwaz.jpg"
               },

               {
                id:18,
                 subtitle:"달쿠쿠",
                 discription: "#경기",
                 discription1:"#미니멀",
                 discription2:"#공간대여",
                 address:"경기 시흥시 하우로 181-4 1층 카페 달쿠쿠",
                 rate:5.0,
                  phone:"0507-1308-8069",
                  sigmenu:"커피",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 21:00",
                  close:"없음",
                  site:"https://m.blog.naver.com/dalkuku",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190715_183%2F1563160152071idAKk_JPEG%2FH03e7rqz-FvgBLP2kU7dl7gy.jpeg.jpg"
               },
               {
                id:19,
                 subtitle:"파이브어클락",
                 discription: "#경기",
                 discription1:"#모던",
                 discription2:"#케이크",
                 address:"경기 화성시 서신면 해안길 264 파이브어클락",
                 rate:5.0,
                  phone:"0507-1355-9670",
                  sigmenu:"디저트",
                  price:"만원미만",
                  parking:"가능",
                  open:"11:00 - 20:00",
                  close:"월요일",
                  site:"없음",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190304_141%2F1551686681694xM8he_JPEG%2FSYLO4VZ1cGXQAcoYeHsRkf8e.jpg"
               },

               {
                id:20,
                 subtitle:"이찌고",
                 discription: "#경기",
                 discription1:"#미니멀",
                 discription2:"#딸기케이크",
                  address:"경기 화성시 동탄반송길 6",
                  rate:3.5,
                  phone:"031-613-0419",
                  sigmenu:"딸기케이크",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 20:30",
                  close:"월요일",
                  site:"https://www.instagram.com/patisserie_ichigo/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20181004_288%2F1538612716148x9JwV_JPEG%2FRZQr49tQp314BWjOJJHQuL95.jpg"
               },


               {
                id:21,
                 subtitle:"조양방직",
                 discription: "#인천",
                 discription1:"#모던",
                 discription2:"#케이크",
                  address:"인천 강화군 강화읍 향나무길5번길 12 조양방직",
                  rate:4.0,
                  phone:"0507-1307-2192",
                  sigmenu:"치즈케이크",
                  price:"만원미만",
                  parking:"가능",
                  open:"11:00 - 20:00",
                  close:"없음",
                  site:"없음",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180627_187%2F15300940343116AI3o_JPEG%2FEfVPmDG9S1XQOW_s8EEdyvD3.jpg"
               },
               {
                id:22,
                 subtitle:"카페얼트",
                 discription: "#인천",
                 discription1:"#미니멀",
                 discription2:"#오션뷰",
                  address:"인천 중구 은하수로 1 오션뷰빌딩 4층",
                  rate:4.0,
                  phone:"032-752-7247",
                  sigmenu:"커피",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 20:00",
                  close:"없음",
                  site:"https://www.instagram.com/cafe_ult/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211221_271%2F1640019571109rHpCI_JPEG%2FKakaoTalk_Photo_2021-12-21-01-07-08.jpeg"
               },

               {
                id:23,
                 subtitle:"C27 다운타운",
                 discription: "#인천",
                 discription1:"#모던",
                 discription2:"#치즈케이크",
                  address:"인천 중구 마시란로 63",
                  rate:3.5,
                  phone:"0507-1393-1058",
                  sigmenu:"치즈케이크",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 21:00",
                  close:"월요일",
                  site:"https://c27.co.kr/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211104_66%2F1636014498767yvHzz_JPEG%2FO28KX3UPQpIdMUJZU-c-g-D9.jpg"
               },
               {
                id:24,
                 subtitle:"라온",
                 discription: "#인천",
                 discription1:"#미니멀",
                 discription2:"#커피",
                  address:"인천 남동구 성말로32번길 6-1 주택",
                  rate:4.0,
                  phone:"0507-1338-6078",
                  sigmenu:"커피",
                  price:"만원미만",
                  parking:"가능",
                  open:"10:00 - 21:00",
                  close:"월요일",
                  site:"https://www.instagram.com/ra_on_cafe/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200424_167%2F1587732026989dpRcc_JPEG%2FZewfsw3x4h_T6WdQ_QYgRw3W.jpeg.jpg"
               },
               {
                id:25,
                 subtitle:"계란집딸들",
                 discription: "#인천",
                 discription1:"#모던",
                 discription2:"#애프터눈티",
                  address:"인천 서구 크리스탈로 100",
                  rate:4.0,
                  phone:"070-4320-9004",
                  sigmenu:"브런치",
                  price:"만원대",
                  parking:"가능",
                  open:"9:30 - 21:00",
                  close:"없음",
                  site:"https://c27.co.kr/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201117_156%2F1605580266666R4Qq4_JPEG%2Fxo5A41Endjb4EVLIJ9DHkxOw.jpg"
               },

               {
                id:26,
                 subtitle:"Lowic",
                 discription: "인천/#미니멀/#브리또",
                  address:"인천 남동구 성말로32번길 11-4",
                  phone:"010-7169-9838",
                  sigmenu:"치킨브리또",
                  price:"만원대",
                  parking:"가능",
                  open:"12:00 - 21:00",
                  close:"월요일, 화요일",
                  site:"https://www.instagram.com/lowic_official/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200103_220%2F1578031195039Clrxb_JPEG%2FFimHAGsDd237vaqByW_HwqM2.jpeg.jpg"
               },

               {
                id:27,
                 subtitle:"카페다이브",
                 discription: "인천/#모던/#커피",
                  address:"인천 서구 청라대로 204",
                  phone:"032-713-8733",
                  sigmenu:"우베아이스크림",
                  price:"만원미만",
                  parking:"가능",
                  open:"11:30 - 21:00",
                  close:"월요일",
                  site:"https://www.instagram.com/cafe_dive_/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200111_229%2F1578722925016fdy9H_JPEG%2FhBensAm5a-rqk4SHO_FqrAt2.jpeg.jpg"
               },
               {
                id:28,
                 subtitle:"화소가",
                 discription: "인천/#미니멀/#아인슈페너라떼",
                  address:"인천 계양구 경명대로957번길 6 3층 화소가",
                  phone:"070-8888-2712",
                  sigmenu:"아인슈페너라떼",
                  price:"만원미만",
                  parking:"가능",
                  open:"11:00 - 21:00",
                  close:"없음",
                  site:"https://www.instagram.com/hwasoga_cafe/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210803_281%2F16279814889695USJ2_JPEG%2FmzYN9LqtpU4D83CS2C0wKgfv.jpg"
               },
               {
                id:29,
                 subtitle:"나드앤윙크",
                 discription: "인천/#모던/#바나나크럼블",
                  address:"인천 연수구 하모니로 158 타임스페이스 A동 121호",
                  phone:"0507-1482-0902",
                  sigmenu:"바나나크럼블",
                  price:"만원미만",
                  parking:"가능",
                  open:"11:00 - 21:00",
                  close:"없음",
                  site:"https://www.instagram.com/nod.and.wink/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210726_260%2F1627286498580ruKAv_JPEG%2FAN31t3yo4oFXggHqgWSHP5C-.jpg"
               },

               {
                id:30,
                 subtitle:"카페샌드",
                 discription: "인천/#미니멀/#크로플",
                  address:"인천 연수구 신송로 170 에이스프라자3 1층 101호 카페샌드 SAND",
                  phone:"0507-1315-1703",
                  sigmenu:"크로플",
                  price:"만원미만",
                  parking:"불가",
                  open:"09:00 - 21:00",
                  close:"없음",
                  site:"https://www.instagram.com/cafe.sand/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200801_140%2F1596256288545Q1Pk7_JPEG%2FJKBWe_Wc6MicLrr4o6xaFthl.jpeg.jpg"
               },

                {
                id:31,
                 subtitle:"웨이브온 커피",
                 discription: "부산/#모던/#사진",
                 address:"부산 기장군 장안읍 해맞이로 286",
                  phone:"051-727-1660",
                  sigmenu:"풀문커피",
                  price:"만원미만",
                  parking:"불가",
                  open:"10:00 - 00:00",
                  close:"없음",
                  site:"http://www.waveoncoffee.com/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210202_146%2F1612276171652INesY_JPEG%2Fs30yaPea9K1y_-B24SGrt3UR.jpg"
               },

               {
                id:32,
                 subtitle:"쿼피집",
                 discription: "부산/#인더스트리얼/#포토존",
                  address:"부산 사상구 사상로356번길 16",
                  phone:"0507-1493-5597",
                  sigmenu:"쿼피",
                  price:"만원미만",
                  parking:"불가",
                  open:"10:00 - 00:00",
                  close:"없음",
                  site:"https://www.instagram.com/quoffee_house/",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210412_40%2F1618236341066kRQR5_JPEG%2F6j_49Gv1A0czK10mt8rzm9tn.jpg"
               },

               {
                id:33,
                 subtitle:"앙로고택",
                 discription: "부산/#모던/#낙동강뷰",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200819_20%2F1597770951179nIxNA_JPEG%2FkFsUbkxq_smZcw2_yuOctpPE.jpg"
               },
               {
                id:28,
                 subtitle:"매그네이트",
                 discription: "부산/#미니멀/#아인슈페너라떼",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200113_164%2F1578894969111Y3zEc_JPEG%2F_6w5foxWbd_z9i3NeCV0K5VF.jpg"
               },
               {
                id:29,
                 subtitle:"꽃피는4월 밀익는5월",
                 discription: "부산/#모던/#빵정식",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210604_217%2F1622782053987QVctx_JPEG%2FWQ_XE3bmXans4rp4JkUblYxp.jpeg.jpg"
               },

               {
                id:30,
                 subtitle:"칙투칙",
                 discription: "부산/#미니멀/#꽃",
                 src:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191018_118%2F1571358996891gRmaC_JPEG%2F1xRZ_QOM92zDKeK9xChjPzo-.jpeg.jpg"
               },

            ],
             tags:[
              {
                id:1,
                tagdetail:"#서울",

              },
              {
                id:1,
                tagdetail:"#커피"
              },
              {id:2, tagdetail:"#맛집"}


          ]

        }
    }


    };

</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

*{font-family: 'Nanum Pen Script', cursive;}


.regiontable{
  background-color:#D5D9E5;


}
.region{
  background-color: #747b95;
  text-align: center;

}


.interiortable{
  background-color:#D5D9E5;
}

.interior{
  background-color:#747b95;
  text-align: center;
}

.subt{
  font-size: 45px;
  color: #747B95;
  padding-bottom: 15px;
}

.disc{
  font-size: 30px;
  color: #e7987d;
}

.simpletable label{
  font-size: 30px;
}
a { text-decoration: none;}

.disc span{

  border-radius: 15px;
  background: rgb(213,94,45);
  width: 80px;
  height: 40px;
  display: table-cell;
  font-size: 30px;
  text-align: center;
 justify-content: center;
  margin-left: 15px;

}

</style>
