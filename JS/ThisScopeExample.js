function RockBand(members) {
  this.members = members;
  this.perform = function () {
    setTimeout(function () {
      members.forEach(function (member) {
        member.perform();
      });
    }, 1000);
  };
}
var theOralCigarettes = new RockBand([
  {
    name: "takuya",
    perform: function () {
      console.log("a e u i a e u i");
    },
  },
  {
    name: "cat",
    perform: function () {
      console.log("MEOW");
    },
  },
]);

theOralCigarettes.perform("takuya");
