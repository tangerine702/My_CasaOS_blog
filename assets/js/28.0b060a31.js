(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{309:function(v,_,t){"use strict";t.r(_);var n=t(14),s=Object(n.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"网络基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络基础知识"}},[v._v("#")]),v._v(" 网络基础知识")]),v._v(" "),t("p",[v._v("1.子网掩码")]),v._v(" "),t("p",[v._v("IP地址分为网络位和主机位，网络位表示哪些主机在同一个网络中，主机位表示每个主机可以分配的IP地址表")]),v._v(" "),t("p",[v._v("例如IP地址："),t("strong",[v._v("192.168")]),v._v(".2.1")]),v._v(" "),t("p",[v._v("子网掩码为：255.255.0.0")]),v._v(" "),t("p",[v._v("这就表示凡是IP地址前两位为"),t("strong",[v._v("192.168")]),v._v("的网络都在同一个网络里，即可以Ping通，例如"),t("strong",[v._v("192.168")]),v._v(".3.1可以跟上面这个IP互通")]),v._v(" "),t("p",[v._v("如果IP为："),t("strong",[v._v("192.167")]),v._v(".2.2，则不可以通信，因为IP前两位不同所以无法通讯")]),v._v(" "),t("p",[t("strong",[v._v("IP地址后面的/8，/16，/24表示子网掩码全为1的位数")]),v._v("，8位为255.0.0.0，16位为255.255.0.0，以此类推")]),v._v(" "),t("p",[v._v("例如192.168.0.21/24，代表其子网掩码为：255.255.255.0")]),v._v(" "),t("p",[v._v("网络号，广播地址：")]),v._v(" "),t("p",[v._v("网络号：主机位全为0的地址")]),v._v(" "),t("p",[v._v("例如192.168.0.122/24，他的子网掩码为255.255.255.0，所以192.168.0.0为这个IP的网络号，可以用于概括的称呼192.168.0这个网络下的所有主机，类似于树状图的根节点")]),v._v(" "),t("p",[v._v("广播地址：主机位全为1的地址")]),v._v(" "),t("p",[v._v("例如192.168.0.255，他的子网掩码为255.255.255.0，所以192.168.0.255为这个IP的广播地址，与他通信可以与该网络下所有主机通信，这个IP也代表了这个网络内的所有人")])])}),[],!1,null,null,null);_.default=s.exports}}]);