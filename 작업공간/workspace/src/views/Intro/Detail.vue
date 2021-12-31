<template>
    <v-container>
   <div class="detaildiv">
       <v-row>
           <v-col cols="6" class="detailcol">
       <p id="subtitle">{{$route.params.subtitle}}</p>

       <p id="description">{{$route.params.discription}}</p>
         <p>주소:{{$route.params.address}}</p>
         <p>전화번호:{{$route.params.phone}}</p>
         <p>대표메뉴:{{$route.params.sigmenu}}</p>
        <p>가격대:{{$route.params.price}}</p>
        <p>주차:{{$route.params.parking}}</p>
        <p>영업시간:{{$route.params.open}}</p>
         <p>휴무일:{{$route.params.close}}</p>
        <p>웹사이트/SNS:</p>
         <!-- <p class="site">{{$route.params.site}}</p> -->
         <!-- <p>{{$route.param.tag}}</p> -->
        <a :href="$route.params.site">{{$route.params.site}}</a>

   <button class="listbtn" @click="gotolist()">목록</button>
 </v-col>
 <v-spacer></v-spacer>
 <v-col class="imgcol">
   <p><v-img :src="$route.params.src" width="400px" height="300px"></v-img></p>
 </v-col></v-row>

       </div>

    </v-container>
</template>


<script>


  export default {
    name: 'Detail',
    methods:{
        gotolist(){
            this.$router.push('/Intro');
        }
    },

   data() {
     items;
        return{

            items:[

            ]
      };
    }
    };
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');


.detaildiv {
  background-color:#FFECB3 ;

}
/* .detailcol{
   background-color:#FFECB3 ;
} */
.detaildiv #subtitle{
  color: #747B95;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 55px;
  }
#description{
  color: #e7987d;
  font-size: 30px;
   font-family: 'Nanum Pen Script', cursive;
}
.imgcol{
  width: 500px;
}
.listbtn{
  margin-top: 15px;
  padding-bottom: 5px;
  background-color:#3E445C;
  border-radius: 10px;
  color: white;
  width: 150px;
  height: 50px;

}
</style>
