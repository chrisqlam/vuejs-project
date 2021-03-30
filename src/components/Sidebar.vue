<template>
  <b-nav vertical class="ml-auto text-left">
    <router-link :to="{ name: 'Dedication' }">Dedication</router-link>
    <router-link :to="{ name: 'Foreword' }">Foreword</router-link>
    <router-link :to="{ name: 'Credits' }">Credits</router-link>
    <router-link :to="{ name: '' }">How To Use This Guide</router-link>
    <p v-b-toggle.collapse-1 variant="primary" class="text-primary">Discord Servers <b-icon-caret-down-fill /></p>
    <b-collapse id="collapse-1">
      <ul>
        <li>
          <a href="https://discord.gg/tjaGuA3" target="_blank"
            >Extreme Evolution</a
          >
        </li>
        <li>
          <a href="https://discord.gg/QbPwGjK" target="_blank"
            >BRS #GundamPilots</a
          >
        </li>

        <li>
          <a href="https://discord.gg/vtdV6kR" target="_blank"
            >Newtype Academy</a
          >
        </li>
        <li>
          <a href="https://discord.gg/xTGm5y" target="_blank">GN Resonance</a>
        </li>
        <li>
          <a href="https://discord.gg/0XZ1jyybIVCeK2dS" target="_blank"
            >Gundam EXVS Australia</a
          >
        </li>

        <li>
          <a href="https://discord.gg/yjTV9yY" target="_blank"
            >EU Gundam EXVS</a
          >
        </li>
        <li>
          <a href="https://discord.gg/BcCBK6E" target="_blank">NGI Events</a>
        </li>
        <li>
          <a href="https://discord.gg/K6mJeyU" target="_blank"
            >GundamEXVS_SEA</a
          >
        </li>
        <li>
          <a href="https://discord.gg/ZhRs4mg" target="_blank"
            >r/Gundam &amp; r/Gunpla</a
          >
        </li>

        <li>
          <a href="https://discord.gg/ubw" target="_blank"
            >UnlimtedBrettWorks</a
          >
        </li>
        <li>
          <a href="https://discord.gg/TPNNNT" target="_blank">Gundam HQ</a>
        </li>
      </ul>
    </b-collapse>
    <p v-b-toggle.collapse-2 variant="primary" class="text-primary">Other Resources <b-icon-caret-down-fill /></p>
    <b-collapse id="collapse-2">
      <ul>
      <li><a href="https://w.atwiki.jp/gundamexvsmbon/" target="_blank">JP MBON Wiki</a></li>
                  <li><a href="https://translate.google.com/translate?sl=ja&tl=en&u=https%3A%2F%2Fw.atwiki.jp%2Fgundamexvsmbon%2F" target="_blank">JP MBON Wiki (EN Translation)</a></li>
                  <li><a href="https://ggez.space/mbon-wiki/" target="_blank">GGEZ MBON Wiki</a></li>
                  <li><a href="https://ggez.space/3000-cost-mobile-suits/" target="_blank">GGEZ - <span class="bg-danger p-1 text-light">3000 Cost</span></a></li>
                  <li><a href="https://ggez.space/2500-cost-mobile-suits/" target="_blank">GGEZ - <span class="bg-orange p-1 text-light">2500 Cost</span></a></li>
                  <li><a href="https://ggez.space/2000-cost-mobile-suits/" target="_blank">GGEZ - <span class="bg-warning p-1 text-light">2000 Cost</span></a></li>
                 <li> <a href="https://ggez.space/1500-cost-mobile-suits/" target="_blank">GGEZ - <span class="bg-success p-1 text-light">1500 Cost</span></a></li>
                  <li><a href="https://reddit.com/r/GundamEXVS" target="_blank">r/GundamEXVS</a></li>
                  <li><a href="https://sites.google.com/view/mbon-guide" target="_blank">UBW MBON Guide</a></li>
                 <li> <a href="https://docs.google.com/document/d/1YStVb9xGbXOY3QRYd2TDppzMzNFucXYK_NDNyT7yg9c/edit?usp=sharing" target="_blank">EXEV / BRS MBON Guide</a></li>
                  </ul>
    </b-collapse>
  </b-nav>
</template>

<style scoped>
p {
  font-size: 0.8em;
  margin: 0;
  padding: .5em;
}

ul {
  list-style: none;
  padding-left: 0;
  padding-top: 0.5em;
}
b-nav {
  display: flex;
  flex-direction: column;
  padding: 2em;
}

a {
  padding: 0.5em 0em;
  font-size: 0.8em;
}

.bg-orange {
  background-color: #ff8300;
}

p[class*="collapse"] {
  padding: 0.5em 0;
}

div[class*="collapse"] li {
  padding: 0.5em 0em;
  
}

</style>
