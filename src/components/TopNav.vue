<template>
  <b-navbar toggleable="lg" sticky="true">
    <div class="container">
      <b-navbar-brand><img src="../assets/logo.png" /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-md-auto">
          <b-nav-item-dropdown
            text="New Players"
            class="has-megamenu nav-primary b-dropdown"
          >
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Introduction</b-dd-group>
                  <!-- use the 'to' directive to link the b-dd-item -->
                  <b-dd-item to="#example">The Most Basics of Basics</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Introduction"
                  class="has-megamenu nav-primary d-lg-none ."
                >
                  <b-dd-item to="/dedication">The Most Basics of Basics</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Controls</b-dd-group>
                  <b-dd-item>Arcade Stick Controls</b-dd-item>
                  <b-dd-item>DualShock 4 Gamepad Controls</b-dd-item>
                  <b-dd-item>Numpad Notation</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Controls"
                  class="has-megamenu nav-primary d-lg-none"
                >
                  <b-dd-item>Arcade Stick Controls</b-dd-item>
                  <b-dd-item>DualShock 4 Gamepad Controls</b-dd-item>
                  <b-dd-item>Numpad Notation</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group
                    ><b-icon-list /> Basic Buttons / Functions</b-dd-group
                  >
                  <b-dd-item>Movement</b-dd-item>
                  <b-dd-item>Blocking / Guard</b-dd-item>
                  <b-dd-item>Shot (A)</b-dd-item>
                  <b-dd-item><b-icon-dot />Charge Shot</b-dd-item>
                  <b-dd-item>Melee (B)</b-dd-item>
                  <b-dd-item>Boost (C)</b-dd-item>
                  <b-dd-item><b-icon-dot />Jump</b-dd-item>
                  <b-dd-item><b-icon-dot />Boost Dash (BD)</b-dd-item>
                  <b-dd-item><b-icon-dot />Step / Dodge</b-dd-item>
                  <b-dd-item><b-icon-dot />Overheat State</b-dd-item>
                  <b-dd-item>Change Target (D)</b-dd-item>
                  <b-dd-item>Button Combinations</b-dd-item>
                  <b-dd-item><b-icon-dot />Sub Shot / Subweapon</b-dd-item>
                  <b-dd-item><b-icon-dot />Special Shot</b-dd-item>
                  <b-dd-item><b-icon-dot />Special Melee</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Basic Buttons / Functions"
                  class="has-megamenu nav-primary d-lg-none"
                >
                  <b-dd-item>Movement</b-dd-item>
                  <b-dd-item>Blocking / Guard</b-dd-item>
                  <b-dd-item>Shot (A)</b-dd-item>
                  <b-dd-item><b-icon-dot />Charge Shot</b-dd-item>
                  <b-dd-item>Melee (B)</b-dd-item>
                  <b-dd-item>Boost (C)</b-dd-item>
                  <b-dd-item><b-icon-dot />Jump</b-dd-item>
                  <b-dd-item><b-icon-dot />Boost Dash (BD)</b-dd-item>
                  <b-dd-item><b-icon-dot />Step / Dodge</b-dd-item>
                  <b-dd-item><b-icon-dot />Overheat State</b-dd-item>
                  <b-dd-item>Change Target (D)</b-dd-item>
                  <b-dd-item>Button Combinations</b-dd-item>
                  <b-dd-item><b-icon-dot />Sub Shot / Subweapon</b-dd-item>
                  <b-dd-item><b-icon-dot />Special Shot</b-dd-item>
                  <b-dd-item><b-icon-dot />Special Melee</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Burst</b-dd-group>
                  <b-dd-item>Burst Types</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-danger p-1 text-light"
                      >F i g h t i n g</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-primary p-1 text-light"
                      >S h o o t i n g</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >E x t e n d</span
                    ></b-dd-item
                  >
                  <b-dd-item>Burst Attack / EX Super</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Burst"
                  class="has-megamenu nav-primary d-lg-none"
                >
                  <b-dd-item>Burst Types</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-danger p-1 text-light"
                      >F i g h t i n g</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-primary p-1 text-light"
                      >S h o o t i n g</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >E x t e n d</span
                    ></b-dd-item
                  >
                  <b-dd-item>Burst Attack / EX Super</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Cost Class</b-dd-group>
                  <b-dd-item>What is Cost?</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >2000</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-danger p-1 text-light"
                      >2500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-orange p-1 text-light"
                      >3000</span
                    ></b-dd-item
                  >
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Cost Class"
                  class="has-megamenu nav-primary d-lg-none"
                >
                  <b-dd-item>What is Cost?</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >2000</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-danger p-1 text-light"
                      >2500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-orange p-1 text-light"
                      >3000</span
                    ></b-dd-item
                  >
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> HUD</b-dd-group>
                  <b-dd-item>HUD Gauges &amp; Information</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="HUD"
                  class="has-megamenu nav-primary d-lg-none"
                >
                  <b-dd-item>HUD Gauges &amp; Information</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> What's Next?</b-dd-group>
                  <b-dd-item>What Do I Do Now?</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="What's Next"
                  class="has-megamenu nav-primary d-lg-none"
                >
                  <b-dd-item>What Do I Do Now?</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            text="Advanced Beginner"
            class="has-megamenu nav-success"
          >
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Introduction</b-dd-group>
                  <b-dd-item>Where The Game Truly Begins</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Introduction"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>Where The Game Truly Begins</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> EXVS Notation</b-dd-group>
                  <b-dd-item>Reading EXVS Notation</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="EXVS Notation"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>Reading EXVS Notation</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Boost Cancelling</b-dd-group>
                  <b-dd-item>What is Boost Cancelling?</b-dd-item>
                  <b-dd-item>BR Zunda</b-dd-item>
                  <b-dd-item>Boost Dash Melee Cancel</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Boost Cancelling"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>What is Boost Cancelling?</b-dd-item>
                  <b-dd-item>BR Zunda</b-dd-item>
                  <b-dd-item>Boost Dash Melee Cancel</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Natural Cancelling</b-dd-group>
                  <b-dd-item>Direct Cancel</b-dd-item>
                  <b-dd-item>Shot-to-Sub</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Natural Cancelling"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>Direct Cancel</b-dd-item>
                  <b-dd-item>Shot-to-Sub</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Melee Cancelling</b-dd-group>
                  <b-dd-item>Lever Shift Inputs</b-dd-item>
                  <b-dd-item>Stepcancelling</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Melee Cancelling"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>Lever Shift Inputs</b-dd-item>
                  <b-dd-item>Stepcancelling</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Transformation</b-dd-group>
                  <b-dd-item>Mobile Armor Mode (MA)</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Transformation"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>Mobile Armor Mode (MA)</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Adavanced HUD</b-dd-group>
                  <b-dd-item>Additional Notifications</b-dd-item>
                  <b-dd-item>Comm Usage &amp; Etiquette</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Advanced HUD"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>Additional Notifications</b-dd-item>
                  <b-dd-item>Comm Usage &amp; Etiquette</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Cutting</b-dd-group>
                  <b-dd-item>What is Cutting?</b-dd-item>
                  <b-dd-item>Damage Scaling</b-dd-item>
                  <b-dd-item>Down Value</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Cutting"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>What is Cutting?</b-dd-item>
                  <b-dd-item>Damage Scaling</b-dd-item>
                  <b-dd-item>Down Value</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> The Math Game</b-dd-group>
                  <b-dd-item>Cost Over</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="The Math Game"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>Cost Over</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> What's Next?</b-dd-group>
                  <b-dd-item>What do I do now?</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="What's Next?"
                  class="has-megamenu nav-success d-lg-none"
                >
                  <b-dd-item>What do I do now?</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            text="Intermediate"
            class="has-megamenu nav-orange"
          >
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Introduction</b-dd-group>
                  <b-dd-item>Every Little Bit Counts</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Introduction"
                  class="has-megamenu nav-orange d-lg-none"
                >
                  <b-dd-item>Every Little Bit Counts</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Boost Management</b-dd-group>
                  <b-dd-item
                    ><b-icon-dot />Bar Color &amp; Why It Matters</b-dd-item
                  >
                  <b-dd-item>Boost Dash Jump / Boost Hop</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot />Boost Hop Landing (fuwafuwa)</b-dd-item
                  >
                  <b-dd-item>Fuwastep</b-dd-item>
                  <b-dd-item><b-icon-dot />Jump Cancel</b-dd-item>
                  <b-dd-item>Vernier State</b-dd-item>
                  <b-dd-item>Overheat Penalty</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Boost Management"
                  class="has-megamenu nav-orange d-lg-none"
                >
                  <b-dd-item
                    ><b-icon-dot />Bar Color &amp; Why It Matters</b-dd-item
                  >
                  <b-dd-item>Boost Dash Jump / Boost Hop</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot />Boost Hop Landing (fuwafuwa)</b-dd-item
                  >
                  <b-dd-item>Fuwastep</b-dd-item>
                  <b-dd-item><b-icon-dot />Jump Cancel</b-dd-item>
                  <b-dd-item>Vernier State</b-dd-item>
                  <b-dd-item>Overheat Penalty</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Adv. Shoot &amp; More</b-dd-group>
                  <b-dd-item>5 Shoot-to-Hit Moments</b-dd-item>
                  <b-dd-item>Projectile Tracking</b-dd-item>
                  <b-dd-item><b-icon-dot />Reticle Color</b-dd-item>
                  <b-dd-item>Muzzle Correction</b-dd-item>
                  <b-dd-item><b-icon-dot />Weapon Skew</b-dd-item>
                  <b-dd-item><b-icon-dot />Firing Arc</b-dd-item>
                  <b-dd-item>Camera Change</b-dd-item>
                  <b-dd-item>Tracking &amp; Cancel Routes</b-dd-item>
                  <b-dd-item><b-icon-dot />Red-to-Green Tracking</b-dd-item>
                  <b-dd-item>Second Impact</b-dd-item>
                  <b-dd-item>Multi-lock</b-dd-item>
                  <b-dd-item>Swivel / Swerve</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Adv. Shoot &amp; More"
                  class="has-megamenu nav-orange d-lg-none"
                >
                  <b-dd-item>5 Shoot-to-Hit Moments</b-dd-item>
                  <b-dd-item>Projectile Tracking</b-dd-item>
                  <b-dd-item><b-icon-dot />Reticle Color</b-dd-item>
                  <b-dd-item>Muzzle Correction</b-dd-item>
                  <b-dd-item><b-icon-dot />Weapon Skew</b-dd-item>
                  <b-dd-item><b-icon-dot />Firing Arc</b-dd-item>
                  <b-dd-item>Camera Change</b-dd-item>
                  <b-dd-item>Tracking &amp; Cancel Routes</b-dd-item>
                  <b-dd-item><b-icon-dot />Red-to-Green Tracking</b-dd-item>
                  <b-dd-item>Second Impact</b-dd-item>
                  <b-dd-item>Multi-lock</b-dd-item>
                  <b-dd-item>Swivel / Swerve</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Weapons &amp; Tools</b-dd-group>
                  <b-dd-item>Complete List &amp; Usages</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Weapons &amp; Tool"
                  class="has-megamenu nav-orange d-lg-none"
                >
                  <b-dd-item>Complete List &amp; Usages</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Team Composition</b-dd-group>
                  <b-dd-item>What is Team Composition?</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-success p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-warning p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-orange p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-warning p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-orange p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-orange p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-orange p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-orange p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-danger p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item>Front Role / Back Role</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Team Composition"
                  class="has-megamenu nav-orange d-lg-none"
                >
                  <b-dd-item>What is Team Composition?</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-success p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-warning p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-orange p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-success p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-warning p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-orange p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-warning p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-orange p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-orange p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-orange p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-danger p-1 text-light"
                      >1500</span
                    >
                    &amp;
                    <span class="bg-danger p-1 text-light"
                      >1500</span
                    ></b-dd-item
                  >
                  <b-dd-item>Front Role / Back Role</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> What's Next?</b-dd-group>
                  <b-dd-item>What Do I Do Now?</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="What's Next?"
                  class="has-megamenu nav-orange d-lg-none"
                >
                  <b-dd-item>What Do I Do Now?</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            text="Advanced Intermediate"
            class="has-megamenu nav-danger"
          >
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> Introduction</b-dd-group>
                  <b-dd-item>Fine Tuning for Max Effect</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Introduction"
                  class="has-megamenu nav-danger d-lg-none"
                >
                  <b-dd-item>Fine Tuning for Max Effect</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group
                    ><b-icon-list /> Adv. Movement &amp; Tools</b-dd-group
                  >
                  <b-dd-item>Directional Influence</b-dd-item>
                  <b-dd-item>Target Switch + Melee</b-dd-item>
                  <b-dd-item>Fast Fall &amp; Options</b-dd-item>
                  <b-dd-item><b-icon-dot />Assist~Main Cancel</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot />Melee~CS Cancel (Karakyan)</b-dd-item
                  >
                  <b-dd-item><b-icon-dot />Backturn Shot Cancel</b-dd-item>
                  <b-dd-item><b-icon-dot />Active Assist Fast Fall</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot />Reload Fast Fall Cancel (Relokyan)</b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-primary p-1 text-light"
                      >S Burst</span
                    >
                    Shenanigans</b-dd-item
                  >
                  <b-dd-item><b-icon-dot />Yellow Lock KD Grabs</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Adv. Movement &amp; Tools"
                  class="has-megamenu nav-danger d-lg-none"
                >
                  <b-dd-item>Directional Influence</b-dd-item>
                  <b-dd-item>Target Switch + Melee</b-dd-item>
                  <b-dd-item>Fast Fall &amp; Options</b-dd-item>
                  <b-dd-item><b-icon-dot />Assist~Main Cancel</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot />Melee~CS Cancel (Karakyan)</b-dd-item
                  >
                  <b-dd-item><b-icon-dot />Backturn Shot Cancel</b-dd-item>
                  <b-dd-item><b-icon-dot />Active Assist Fast Fall</b-dd-item>
                  <b-dd-item
                    ><b-icon-dot />Reload Fast Fall Cancel (Relokyan)</b-dd-item
                  >
                  <b-dd-item
                    ><b-icon-dot /><span class="bg-primary p-1 text-light"
                      >S Burst</span
                    >
                    Shenanigans</b-dd-item
                  >
                  <b-dd-item><b-icon-dot />Yellow Lock KD Grabs</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group
                    ><b-icon-list /> Adv. Movement &amp; Tools</b-dd-group
                  >
                  <b-dd-item>Brake Cancelling</b-dd-item>
                  <b-dd-item>Sliding</b-dd-item>
                  <b-dd-item>Helmbreakers (Pyonkaku)</b-dd-item>
                  <b-dd-item><b-icon-dot />Pyon Brake Cancels</b-dd-item>
                  <b-dd-item>Retreat Boost Penalty</b-dd-item>
                  <b-dd-item>Melee in Green Lock Range</b-dd-item>
                  <b-dd-item>Overheat Stalling (Agaki)</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Adv. Movement &amp; Tools"
                  class="has-megamenu nav-danger d-lg-none"
                >
                  <b-dd-item>Brake Cancelling</b-dd-item>
                  <b-dd-item>Sliding</b-dd-item>
                  <b-dd-item>Helmbreakers (Pyonkaku)</b-dd-item>
                  <b-dd-item><b-icon-dot />Pyon Brake Cancels</b-dd-item>
                  <b-dd-item>Retreat Boost Penalty</b-dd-item>
                  <b-dd-item>Melee in Green Lock Range</b-dd-item>
                  <b-dd-item>Overheat Stalling (Agaki)</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> What's Next?</b-dd-group>
                  <b-dd-item>What Do I Do Now?</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="What's Next?"
                  class="has-megamenu nav-danger d-lg-none"
                >
                  <b-dd-item>What Do I Do Now?</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Expert" class="has-megamenu nav-grey">
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group
                    ><b-icon-list /> Active Contribution &amp;
                    Teaching</b-dd-group
                  >
                  <b-dd-item>You Should Teach!</b-dd-item>
                  <b-dd-item>Why Should You Teach?</b-dd-item>
                  <b-dd-item>How to Teach</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Active Contribution &amp; Teaching"
                  class="has-megamenu nav-grey d-lg-none"
                >
                  <b-dd-item>You Should Teach!</b-dd-item>
                  <b-dd-item>Why Should You Teach?</b-dd-item>
                  <b-dd-item>How to Teach</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group
                    ><b-icon-list /> Help Craft &amp; Evolve EXVS Game
                    Theory</b-dd-group
                  >
                  <b-dd-item>Information Synthesis</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Help Craft &amp; Evolve EXVS Game
                    Theory"
                  class="has-megamenu nav-grey d-lg-none"
                >
                  <b-dd-item>Information Synthesis</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3 border-right">
                <div class="d-none d-lg-block">
                  <b-dd-group
                    ><b-icon-list /> Playing with Intentionality</b-dd-group
                  >
                  <b-dd-item>Looking Ahead</b-dd-item>
                  <b-dd-item>Reading the Room</b-dd-item>
                  <b-dd-item>Automatic Response</b-dd-item>
                  <b-dd-item>Adapative Response</b-dd-item>
                  <b-dd-item>No Wasted Actions</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Playing with Intentionality"
                  class="has-megamenu nav-grey d-lg-none"
                >
                  <b-dd-item>Looking Ahead</b-dd-item>
                  <b-dd-item>Reading the Room</b-dd-item>
                  <b-dd-item>Automatic Response</b-dd-item>
                  <b-dd-item>Adapative Response</b-dd-item>
                  <b-dd-item>No Wasted Actions</b-dd-item>
                </b-nav-item-dropdown>
              </div>
              <div class="col-lg-3">
                <div class="d-none d-lg-block">
                  <b-dd-group><b-icon-list /> There Is...</b-dd-group>
                  <b-dd-item>No Guide For This Part</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="There Is..."
                  class="has-megamenu nav-grey d-lg-none"
                >
                  <b-dd-item>No Guide For This Part</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
            <div class="row text-center text-lg-left">
              <div class="col-lg-3">
                <div class="d-none d-lg-block">
                  <b-dd-group
                    ><b-icon-list /> Community Participation</b-dd-group
                  >
                  <b-dd-item>...is the Surest Path</b-dd-item>
                </div>
                <b-nav-item-dropdown
                  id="nestedDropDown"
                  text="Community Participation"
                  class="has-megamenu nav-grey d-lg-none"
                >
                  <b-dd-item>...is the Surest Path</b-dd-item>
                </b-nav-item-dropdown>
              </div>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      isNestedDropDownVisibile: false,
    };
  },
  mounted: function () {
    this.$root.$on("bv::dropdown::show", (bvEvent) => {
      if (bvEvent.componentId === "nestedDropDown") {
        this.isNestedDropDownVisibile = true;
      }
    });
    this.$root.$on("bv::dropdown::hide", (bvEvent) => {
      if (bvEvent.componentId === "nestedDropDown") {
        this.isNestedDropDownVisibile = false;
      }
      if (this.isNestedDropDownVisibile) {
        bvEvent.preventDefault();
      }
    });
  },
};
</script>

<style scoped>
.has-megamenu {
  padding-right: 1em;
}

.row {
  margin: 0;
}

.bg-orange {
  background-color: #ff8300;
}

.nav-primary /deep/ li {
  color: #007bff !important;
  font-weight: bold;
}

.nav-success /deep/ li {
  color: #28a745 !important;
  font-weight: bold;
}

.nav-orange /deep/ li {
  color: #ff8300 !important;
  font-weight: bold;
}

.nav-danger /deep/ li {
  color: #dc3545 !important;
  font-weight: bold;
}

.nav-grey /deep/ li {
  color: #86939e !important;
  font-weight: bold;
}

#nestedDropDown /deep/ li {
  text-align: center;
}

#nestedDropDown.nav-primary /deep/ span {
  color: #007bff !important;
  font-weight: bold;
}

#nestedDropDown.nav-primary /deep/ span.text-light {
  color: white!important;
}

#nestedDropDown.nav-success /deep/ span {
  color: #28a745 !important;
  font-weight: bold;
}

#nestedDropDown.nav-success /deep/ span.text-light {
  color: white!important;
}

#nestedDropDown.nav-orange /deep/ span {
  color: #ff8300 !important;
  font-weight: bold;
}

#nestedDropDown.nav-orange /deep/ span.text-light {
  color: white!important;
}

#nestedDropDown.nav-danger /deep/ span {
  color: #dc3545 !important;
  font-weight: bold;
}

#nestedDropDown.nav-danger /deep/ span.text-light {
  color: white!important;
}

#nestedDropDown.nav-grey /deep/ span {
  color: #86939e !important;
  font-weight: bold;
}

#nestedDropDown.nav-grey /deep/ span.text-light {
  color: white!important;
}



@media (min-width: 992px) {
  .has-megamenu {
    position: static !important;
  }
}
</style>