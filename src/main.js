import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/en";

// import FriendContact from "./components/FriendContact.vue";
// import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);
// createApp(App).mount("#app");

app.use(ElementPlus, { locale });

// app.component("friend-contact", FriendContact);
// app.component("new-friend", NewFriend);

app.mount("#app");
