import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarLeftOverlay extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='Poconos'>
              <h2>Poconos</h2>
              <p>Time:TBA</p>
              <p>Location:TBA</p>
            </Menu.Item>
            <Menu.Item name='Day of the Bosnian Army'>
              <h2>Day of the Bosnian Army</h2>
              <p>Time:TBA</p>
              <p>Location:TBA</p>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftOverlay


function openNavr() {
    document.getElementById("mySidenavr").style.width = "250px";
}
function openNavl() {
    document.getElementById("mySidenavl").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenavr").style.width = "0";
    document.getElementById("mySidenavl").style.width = "0";
} 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideShow");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
//Info
var mInfo = document.getElementById('mInfo');
var bInfo = document.getElementById("bInfo");
var span = document.getElementsByClassName("close")[0];
bInfo.onclick = function() {
    mInfo.style.display = "block";
}
span.onclick = function() {
    mInfo.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == mInfo) {
        mInfo.style.display = "none";
    }
}
//Gallery
/*var mGallery = document.getElementById('mGallery');
var bGallery = document.getElementById("bGallery");
var span = document.getElementsByClassName("close")[0];
bGallery.onclick = function() {
    mGallery.style.display = "block";
}
span.onclick = function() {
    mGallery.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == mGallery) {
        mGallery.style.display = "none";
    }
}*/
//Members
var mMembers = document.getElementById('mMembers');
var bMembers = document.getElementById("bMembers");
var span = document.getElementsByClassName("close")[0];
bMembers.onclick = function() {
    mMembers.style.display = "block";
}
span.onclick = function() {
    mMembers.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == mMembers) {
        mMembers.style.display = "none";
    }
}
