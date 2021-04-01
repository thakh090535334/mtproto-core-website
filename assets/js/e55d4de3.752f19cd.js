(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),s=a(7),r=(a(0),a(100)),o={title:"Call The Telegram Methods"},l={unversionedId:"call-the-telegram-methods",id:"call-the-telegram-methods",isDocsHomePage:!1,title:"Call The Telegram Methods",description:"Requirements",source:"@site/docs/call-the-telegram-methods.md",slug:"/call-the-telegram-methods",permalink:"/mtproto-core-website/docs/call-the-telegram-methods",editUrl:"https://github.com/alik0211/mtproto-core-website/edit/master/docs/call-the-telegram-methods.md",version:"current",sidebar:"docs",previous:{title:"Setup. Handle Updates",permalink:"/mtproto-core-website/docs/setup-handle-updates"},next:{title:"Custom Storage",permalink:"/mtproto-core-website/docs/custom-storage"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Fundamentals",id:"fundamentals",children:[{value:"<code>method</code>",id:"method",children:[]},{value:"<code>params</code>",id:"params",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Parse all messages from channel",id:"parse-all-messages-from-channel",children:[]}]}],i={toc:c};function m(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use the API module from the ",Object(r.b)("a",{parentName:"li",href:"/mtproto-core-website/docs/setup-handle-errors"},"error handling")," section"),Object(r.b)("li",{parentName:"ul"},"To call most of the methods, you first need to run the ",Object(r.b)("a",{parentName:"li",href:"/mtproto-core-website/docs/user-authorization"},"user authorization"))),Object(r.b)("h2",{id:"fundamentals"},"Fundamentals"),Object(r.b)("p",null,"To call the Telegram method, use the ",Object(r.b)("inlineCode",{parentName:"p"},"api.call(method, params, options)")," method"),Object(r.b)("h3",{id:"method"},Object(r.b)("inlineCode",{parentName:"h3"},"method")),Object(r.b)("p",null,"Method name from ",Object(r.b)("a",{parentName:"p",href:"https://core.telegram.org/methods"},"methods list"),". Example for ",Object(r.b)("a",{parentName:"p",href:"https://core.telegram.org/method/help.getNearestDc"},"help.getNearestDc"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"api.call('help.getNearestDc');\n")),Object(r.b)("h3",{id:"params"},Object(r.b)("inlineCode",{parentName:"h3"},"params")),Object(r.b)("p",null,"Let's analyze the example for ",Object(r.b)("a",{parentName:"p",href:"https://core.telegram.org/method/messages.sendMessage#parameters"},"messages.sendMessage"),":"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"flags \u2014 don't pass it on. Calculated automatically"),Object(r.b)("li",{parentName:"ol"},"peer \u2014 ",Object(r.b)("a",{parentName:"li",href:"https://core.telegram.org/type/InputPeer"},"InputPeer")," type. To pass a constructor of the type use ",Object(r.b)("inlineCode",{parentName:"li"},"_")),Object(r.b)("li",{parentName:"ol"},"entities \u2014 Vector of ",Object(r.b)("a",{parentName:"li",href:"https://core.telegram.org/type/MessageEntity"},"MessageEntity")," type. To pass a vector, use an array")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"api.call('messages.sendMessage', {\n  clear_draft: true,\n\n  peer: {\n    _: 'inputPeerSelf',\n  },\n  message: 'Hello @mtproto_core',\n  entities: [\n    {\n      _: 'messageEntityBold',\n      offset: 6,\n      length: 13,\n    },\n  ],\n\n  random_id: Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),\n});\n")),Object(r.b)("h3",{id:"options"},Object(r.b)("inlineCode",{parentName:"h3"},"options")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"dcId")," \u2014 Number. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"2"),". Call the method on a specific DC"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"syncAuth")," \u2014 Boolean. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),". Copy the authorization to all DCs (if the answer contains a ",Object(r.b)("a",{parentName:"li",href:"https://core.telegram.org/constructor/auth.authorization"},Object(r.b)("inlineCode",{parentName:"a"},"auth.authorization")),")")),Object(r.b)("p",null,"Example for ",Object(r.b)("a",{parentName:"p",href:"https://core.telegram.org/method/help.getNearestDc"},"help.getNearestDc"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"api.call('help.getNearestDc', {}, {\n  dcId: 1,\n});\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"parse-all-messages-from-channel"},"Parse all messages from channel"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  const resolvedPeer = await api.call('contacts.resolveUsername', {\n    username: 'mtproto_core',\n  });\n\n  const channel = resolvedPeer.chats.find(\n    (chat) => chat.id === resolvedPeer.peer.channel_id\n  );\n\n  const inputPeer = {\n    _: 'inputPeerChannel',\n    channel_id: channel.id,\n    access_hash: channel.access_hash,\n  };\n\n  const LIMIT_COUNT = 10;\n  const allMessages = [];\n\n  const firstHistoryResult = await api.call('messages.getHistory', {\n    peer: inputPeer,\n    limit: LIMIT_COUNT,\n  });\n\n  const historyCount = firstHistoryResult.count;\n\n  for (let offset = 0; offset < historyCount; offset += LIMIT_COUNT) {\n    const history = await api.call('messages.getHistory', {\n      peer: inputPeer,\n      add_offset: offset,\n      limit: LIMIT_COUNT,\n    });\n\n    allMessages.push(...history.messages);\n  }\n\n  console.log('allMessages:', allMessages);\n})();\n")))}m.isMDXComponent=!0}}]);