/* ============================================================
   MISSION CONFIG  —  edit this file to update the facts.
   Anything marked TODO is a guess or a blank you should fill in.
   ============================================================ */

window.MISSION = {

  missionary: {
    firstName: "Isaac",
    lastName: "Mellor",
    title: "Elder",
    get fullName() { return this.title + " " + this.firstName + " " + this.lastName; },
    nickname: "Elder Mella",                 // shown on the About page; "" hides it
    email: "isaac.mellor@missionary.org",
    portrait: "photos/isaac.jpg",            // drop his mission photo here
    tagline: "Elder Mella, out in the ville: sharing good news in Middle Tennessee, one good day at a time.",
    homeWard: "Axtell 1st Ward",
    farewellDate: ""                         // TODO: optional, YYYY-MM-DD
  },

  mission: {
    name: "Tennessee Nashville Mission",
    shortName: "Nashville",
    country: "USA",
    language: "English",
    languageNative: "English",
    presidentName: "President Matthew K. Stepan and Sister Wendy A. Stepan",
    // The About page's "mission president" section. bio is in our own words from
    // the source; the section stays hidden while names or bio are empty.
    president: {
      names: "President Matthew K. Stepan and Sister Wendy A. Stepan",
      since: "2025-07-01",
      photo: "",                             // optional: a photo of them, e.g. one he sends
      bio: [
        "President and Sister Stepan came to Tennessee from the Hillsdale Ward in San Jose, California, where he was serving as stake president. They have five children, and both of them served their own missions in Russia, in the St. Petersburg Mission.",
        "President Stepan was born in Renton, Washington. Before leading his stake he served as a bishop and a high councilor, and he has also taught seminary and been a scoutmaster. Sister Stepan was born in Salt Lake City. She was teaching seminary when they were called, and she has been a ward Young Women president and a ward Primary president."
      ],
      source: { label: "Church News", url: "https://www.thechurchnews.com/leaders/2025/02/28/16-new-mission-presidents-and-companions-canada-to-korea/" }
    },
    officeAddress: [                         // TODO: confirm the street address from the mission office
      "Tennessee Nashville Mission",
      "USA"
    ],
    mapCenter: [36.1667, -86.7680],          // Nashville, Tennessee
    mapZoom: 7,
    // Rough box around Middle Tennessee and the Tennessee–Kentucky line.
    // Not the official mission boundary. Decorative only.
    boundsHint: [[37.3, -88.3], [34.9, -85.0]]
  },

  dates: {
    mtcStart: "2026-08-05",                  // entered the Provo MTC
    manilaMtcStart: "",                      // no second MTC for this mission (key name kept for the code)
    fieldStart: "2026-08-19",                // arrives in the field
    release: "2028-08-02",                   // expected release / homecoming
    transferLength: 6                        // weeks per transfer
  },

  links: {
    // The shared album
    googlePhotosTitle: "elder Mella in the ville",
    googlePhotos: "https://photos.app.goo.gl/sHYBfUJQ3ibYnpaY6"
  },

  /* ------------------------------------------------------------
     GOOGLE MAPS
     Paste your Maps JavaScript API key below and the map page turns
     on. See "Setting up the map" in README.md for how to get one.
     Until a key is here, the page shows a friendly notice instead of
     a broken map. The key is visible in the page source — that is
     normal for Google Maps — so restrict it by website in the Google
     Cloud console once the site is deployed.
     ------------------------------------------------------------ */
  maps: {
    apiKey: "AIzaSyAFgOVCbW4-VKrasthQZ4g2PvMfPcQm0J4",   // shared key from Mission Control; deploy allows this site's address on it
    defaultZoom: 17,      // how close the map starts. 15 = neighbourhood, 18 = rooftops
    mapType: "hybrid"     // "hybrid" = satellite with street names, "satellite" = imagery only
  },

  /* ------------------------------------------------------------
     AREAS — add a new entry every time he gets transferred.
     Set `current: true` on exactly one, and give the previous one
     an `end` date. Look up lat/lng by searching the town on
     Google Maps and copying the two numbers from the URL.
     ------------------------------------------------------------ */
  areas: [
    {
      name: "Provo MTC",
      region: "Provo, Utah, USA",
      type: "mtc",
      start: "2026-08-05",
      end: "2026-08-19",
      lat: 40.259166,
      lng: -111.645602,
      zoom: 17,                              // optional: overrides maps.defaultZoom for this area
      companion: "Elder Ricks",
      note: "",
      current: false
    },
    {
      name: "Franklin",
      region: "Franklin, Tennessee, USA",
      type: "area",
      start: "2026-08-19",
      end: null,
      lat: 35.92506,
      lng: -86.86889,
      companion: "Elder Casper",
      note: "Franklin 4th Ward · Trained by Elder Olivera until the September 30 transfer",
      current: true
    }
  ]
};
