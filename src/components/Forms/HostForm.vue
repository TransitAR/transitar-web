<template>
  <div class="columns">
    <div class="column">
      <LocationInfo />
    </div>
    <div class="column">
      <ExperienceInfo />
    </div>
    <div class="column">
      <ExtraInfo />
    </div>
  </div>
</template>

<script>
import LocationInfo from "./Sections/LocationInfo";
import ExperienceInfo from "./Sections/ExperienceInfo";
import ExtraInfo from "./Sections/ExtraInfo";

export default {
  name: "petform",
  components: {
    LocationInfo,
    ExperienceInfo,
    ExtraInfo
  }
};
</script>