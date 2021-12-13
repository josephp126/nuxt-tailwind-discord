<template>
    <div class="py-1 lg:py-4 px-4">
      <div class="mx-auto max-w-xl form-card w-full lg:w-112 relative lg:h-64">
        <div class="px-8">
          <div class="gradient-circle w-24 h-24 absolute right-2 top-2" />
          <div class="pt-2">
            <div class="py-2">
              <p class="text-2xl pt-2 pb-1 font-semibold font-montserrat">Language</p>
              <p class="text-sm pt-1 pb-2">
                Do you not prefer English? Change it to a suitable one below!
              </p>
            </div>
          </div>
          <div class="py-2 flex flex-col lg:flex-row items-center mx-auto">
            <div v-if="$fetchState.pending" class="group relative">
              <div
              class="border-gray-500 border-opacity-80 bg-transparent h-12 w-72 border-2 p-2 rounded-md"
            ><div class="h-full my-auto bg-gray-600 rounded animate-pulse"></div></div>
            </div>
            <div v-else class="group relative">

                <div id="dropdown" class="rounded-xl bg-transparent border-gray-700 border-2 hover:border-selectorhighlight active:border-selectorhighlight">
                  <div
                    :class="`inset-0 w-full fixed h-full z-10 block ${
                      dropOpen2 ? 'visible' : 'invisible'
                    }`"
                    @click="toggleOff2"
                   />
                  <div id="dropdown-stuff" class="h-12 w-72 p-2 relative flex flex-col items-center">
                    <div id = "default-stuff" :key="selected.name" class="my-auto w-full flex flex-row items-center cursor-pointer" @click = "toggleDrop2">
                      <div class="flex flex-row h-full items-center justify-center">
                        <img :src="`/svg/${selected.flag}.svg?raw`" />
                      </div>
                      <div class="text-md font-semibold px-2">
                        {{ selected.name }}
                      </div>
                      <div class="text-gray-300 pl-1 ml-auto mr-1"><SVGDown :class="`${dropOpen2 ? 'transform rotate-180 transition duration-500' : 'transition duration-500'}`" /></div>
                    </div>
                    <div id = "choice-stuff" :class="`z-30 bg-gradient-to-l border border-gray-600 rounded-xl w-full divide-y divide-gray-600 h-32 overflow-y-scroll from-discortics-header via-discortics-header to-discortics-header absolute flex flex-col items-start -bottom-32 ${dropOpen2 ? 'block' : 'hidden'}`">
                      <div
                        v-for="lang in langs"
                        :key="lang.value"
                        :class="`flex flex-row items-center ${ lang.value == selected.value ?  'bg-discortics-dropselected ' : ''}hover:bg-gray-800 px-1 py-2 w-full cursor-pointer`"
                        @click="lang.value == selected.value ? (x) => {} : switchLang(lang)"
                      >
                        <div class="flex flex-row h-full items-center justify-center pl-1">
                          <img :src="`/svg/${lang.flag}.svg?raw`" />
                        </div>
                        <div
                          class="truncate text-md font-semibold px-1"
                        >
                          {{ lang.name }}
                        </div>
                        <div :class="`text-gray-300 ml-auto${ lang.value == selected.value ? '' : ' invisible'}`"><SVGDropSelected /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div
            v-if="$fetchState.pending"
            class="
              flex flex-row flex-wrap
              justify-start
              space-x-2
              py-2
              text-gray-300
              pointer-events-none
            "
          >
            <div class="h-8 py-3 flex flex-row items-center">
              <div class="h-8 w-24 exampleText text-xs rounded"><div class="animate-pulse m-2 p-2 h-2 bg-gray-600 rounded"></div></div>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <div class="h-8 w-24 exampleText text-xs rounded"><div class="animate-pulse m-2 p-2 h-2 bg-gray-600 rounded"></div></div>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <div class="h-8 w-24 exampleText text-xs rounded"><div class="animate-pulse m-2 p-2 h-2 bg-gray-600 rounded"></div></div>
            </div>
          </div>
          <div
            v-else
            class="
              flex flex-row flex-wrap
              justify-start
              space-x-2
              py-2
              text-gray-300
              pointer-events-none
            "
          >
            <div
              v-for="example in selected.examples"
              :key="example"
              class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">{{ example }}</span>
            </div>
          </div>
        </div>
      </div></div>
</template>

<script>

export default {
  data() {
    const langs = [{
          name: "English",
          value: "english",
          flag: "flagEN",
          examples: ['This is an example',"Hi.","Successful"]
        },{
          name: "Neko",
          value: "neko",
          flag: "flagNEKO",
          examples: ['This is an exampwe',"hi. *looks at you*","Successfuw"]
        },{
          name: "Français",
          value: "french",
          flag: "flagFR",
          examples: ['Ceci est un exemple',"Salut.","À succès"]
        },{
          name: "российский",
          value: "russian",
          flag: "flagRU",
          examples: ['Это пример',"Привет.","Успешный"]
        },{
          name: "Polski",
          value: "polish",
          flag: "flagPL",
          examples: ['To jest przykład',"Cześć.","Udany"]
        },{
          name: "हिन्दी",
          value: "hindi",
          flag: "flagHI",
          examples: ['यह एक उदाहरण है',"नमस्ते।","सफल"]
        },{
          name: "മലയാളം",
          value: "malayalam",
          flag: "flagHI",
          examples: ['ഇതൊരു ഉദാഹരണമാണ്',"ഹായ്.","വിജയിച്ചു"]
        },{
          name: "Hollands",
          value: "dutch",
          flag: "flagNL",
          examples: ['Dit is een voorbeeld',"Hoi.","Succesvol"]
        },{
          name: "Español",
          value: "spanish",
          flag: "flagES",
          examples: ['Esto es un ejemplo',"Hola.","Exitoso"]
        },{
          name: "Tiếng Việt",
          value: "vietnamese",
          flag: "flagVN",
          examples: ['Đây là một ví dụ',"Chào.","Thành công"]
        },{
          name: "Deutsche",
          value: "german",
          flag: "flagDE",
          examples: ['Dies ist ein Beispiel',"Hallo.","Erfolgreich"]
        },{
          name: "Norsk",
          value: "norwegian",
          flag: "flagNO",
          examples: ['Dette er et eksempel',"Hei.","Vellykket"]
        },{
          name: "中国官话",
          value: "mandarin",
          flag: "flagCN",
          examples: ['这是一个例子',"你好.","成功的"]
        },{
          name: "العربية",
          value: "arabic",
          flag: "flagAE",
          examples: ['هذا مثال',"مرحبا.","ناجح"]
        },
      ];
    return {
      langs ,
      selected: langs[0],
      oldSelected: langs[0],
      dropOpen2: false,
    }
  },
  async fetch() {
    const token = localStorage.getItem('sessionToken')
    const response = await this.$api.request({
      url: `/v2/language/${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    let lang = this.langs[0];
    if (response.status === 200) lang = response.data.language;

    this.selected = this.langs.find(i => i.value === lang);
    this.oldSelected = this.selected;
    
  },
  methods: {
    toggleDrop2() {
      this.dropOpen2 = !this.dropOpen2
    },
    toggleOff2() {
        this.dropOpen2 = false;
    },
    async updateLang() {
      if(this.oldSelected !== this.selected){
        const language = this.selected.value;
        const response = await this.$api.request({
          url: `/v2/language/${localStorage.getItem('guildID')}`,
          method: 'post',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
          },
          data: {
            language,
          },
        })
        if (response.status === 200){
          this.oldSelected = this.selected;
        }
      }
    },
    switchLang(lang) {
      this.toggleOff2();
      this.selected = lang;
      this.$emit("langChange",true);
    },
  },
}
</script>