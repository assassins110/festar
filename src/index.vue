<template>
    <div class="layout" :style="{height: '98vh'}">
        <Layout>
            <Header :style="{width: '100vw'}">
                  <Menu :style="{width: '60vw', margin: 'auto'}" class="navmenu" mode="horizontal" theme="dark" active-name="1">
                      <div>
                          <img class="layout-logo" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png">
                      </div>
                      <div class="layout-nav">
                          <MenuItem name="1">
                              <Icon type="ios-navigate"></Icon>
                              Item 1
                          </MenuItem>
                          <MenuItem name="2">
                              <Icon type="ios-keypad"></Icon>
                              Item 2
                          </MenuItem>
                          <MenuItem name="3">
                              <Icon type="ios-analytics"></Icon>
                              Item 3
                          </MenuItem>
                          <MenuItem name="4">
                              <Icon type="ios-paper"></Icon>
                              Item 4
                          </MenuItem>
                      </div>
                  </Menu>
            </Header>
            <Layout>
                <Sider collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" :class="menuitemClasses">
                        <MenuItem name="1-1">
                            <Icon type="ios-navigate"/>
                            <span>Option 1</span>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <Icon type="md-at" />
                            <span>Option 2</span>
                        </MenuItem>
                        <MenuItem name="1-3">
                            <Icon type="md-bowtie" />
                            <span>Option 3</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '75vh',minWidth: '20vw', maxHeight: '78vh',background: '#fff'}">
                        <router-view/>
                    </Content>
                    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data (){
            return{
              isCollapsed: false,
            }
        },computed:{
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },methods: {
        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 35px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-footer-center{
    text-align: center;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.collapsed-menu span{
    visibility:hidden;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(0px)translateY(10px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 25px;
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    /*transform: translateX(0px);*/
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    /*font-size: 16px;*/
}
</style>
