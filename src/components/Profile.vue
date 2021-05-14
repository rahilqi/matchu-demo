<template>
  <div class="outer round-corner">
    <div class="profile-align">
      <div>
        <img src="@/assets/background.jpg" class="profile-pic">
        <div class="profile-name">
          Lorem Ipsum
        </div>
        <div class="profile-links-outer">
          <span class="profile-links"><b-icon class="nav-icons" icon="linkedin" aria-hidden="true"></b-icon></span>
          <span class="profile-links"><b-icon class="nav-icons" icon="github" aria-hidden="true"></b-icon></span>
          <span class="profile-links"><b-icon class="nav-icons" icon="facebook" aria-hidden="true"></b-icon></span>
        </div>
      </div>
      <div class="inner round-corner">
        <div class="profile-info" id="profile">
          <h3>Profile</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        </div>
        <div class="profile-info" id="education">
          <h3>Education</h3>
           <Timeline :timeline-items="timelineItems" :message-when-no-items="messageWhenNoItems"/>
        </div>
        <div class="profile-info" id="skills">
          <div v-for="item in items" :key="item.name">
            <VueSlideBar v-model="item.value"></VueSlideBar>
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="nav-outer">
        <div>
          <a href="javascript:void(0)" v-on:click="profile()"><b-icon class="nav-icons nav-icons-selected" icon="person-circle" aria-hidden="true"></b-icon></a>
        </div>
        <div>
          <a href="javascript:void(0)" v-on:click="education()"><b-icon class="nav-icons" icon="briefcase" aria-hidden="true"></b-icon></a>
        </div>
        <div>
          <a href="javascript:void(0)" v-on:click="skills()"><b-icon class="nav-icons" icon="bar-chart-fill" aria-hidden="true"></b-icon></a>
        </div>
        <div>
          <div>
            <router-link to="#" v-b-modal.modal-1><b-icon class="nav-icons" icon="pencil-square" aria-hidden="true"></b-icon></router-link>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-1" title="Contact Me">
      <input type="text" name="email" class="form-control contact-form-text" placeholder="Write a message...">
    </b-modal>
  </div>
</template>

<script>
  import Timeline from 'timeline-vuejs';
  import $ from "jquery";

  export default {
    name: 'Profile',
    components: {
      Timeline,
    },
    data() {
      return {
        items: [
          { name: "Java", value: 90 },
          { name: "Ruby",value: 60 },
          { name: "Python",value: 75 },
          { name: "HTML",value: 80 },
          { name: "CSS",value: 50 }
        ],
      messageWhenNoItems: 'There are not items',
      timelineItems: [
        {
          from: new Date(2018, 7),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2016, 1),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2016, 6),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        },
        {
          from: new Date(2012, 1),
          title: 'Name',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
        }
      ]}
    },
    methods: {
      profile() {
        document.getElementById('profile').scrollIntoView();
        var obj = $(this);
        console.log(obj)
        this.addToggleClass();
      },
      education() {
        document.getElementById('education').scrollIntoView();
      },
      skills() {
        document.getElementById('skills').scrollIntoView();
      },
      addToggleClass() {
        $( "nav-icons" ).each(function() {
          $(this).removeClass("nav-icons-selected");
        });
        $(this).addClass("nav-icons-selected");
      }
    }
  }
</script>
<style>

.contact-form-text{
  height:100px;
}

.nav-outer{
  margin-left: 20px;
  margin-top: 100px;
}

.nav-icons{
  height: 30px;
  width: 30px;
  color: white;
  margin-bottom: 30px;
}

.nav-icons:hover{
  height: 32px;
  width: 32px;
  color: black;
}

.outer {
  width: 100%;
  height: 600px;
  margin-top: 75px;
  background: #4968bf;
}

.profile-info {
  width: calc(100% - 40px);
  padding: 15px;
  height: 550px;
  overflow-y: auto;
  margin: 10px;
  text-align: justify;
  text-justify: inter-word;
}

.profile-align{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.profile-pic{
  position: relative;
  left: 78px;
  top:25px;
  width:220px;
  height:220px;
  border-radius: 50%;
}
.nav-icons-selected{
  color: black;
}

.profile-name {
  margin-left: 10px;
  position: relative;
  left: 66px;
  top: 25px;
  font-size: 30px;
  width: 216px;
  text-transform: uppercase;
  color: white;
  text-shadow: 2px 2px #101219;
  font-weight: 1000 ;
}

.inner {
  width: 70%;
  height: 550px;
  overflow: auto;
  justify-content: center;
  background: white;
  display: flex;
  margin-left: 10%;
  flex-wrap: wrap;
  margin-top: 25px;
  box-shadow: 5px 10px 8px 10px #3452a7;
}

.round-corner{
  border: 0px solid black;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.profile-links{
  margin-left: 10px;
  margin-top: 25px;
  cursor: pointer;
}

.profile-links-outer{
  margin-left: 116px;
  position: fixed;
  margin-top: 38px;
}
</style>