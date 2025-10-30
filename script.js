<script>
    const player = document.getElementById("player");
    const hurdle = document.getElementById("hurdle");

    document.addEventListener("keydown", e => {
      if (e.code === "Space" || e.code === "ArrowUp") jump();
    });

    function jump() {
      if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        setTimeout(() => {
          player.classList.remove("jump");
        }, 600);
      }
    }

    let isAlive = setInterval(() => {
      const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
      const hurdleLeft = parseInt(window.getComputedStyle(hurdle).getPropertyValue("left"));

      // Detect collision — when hurdle is close to player and player is too low
      if (hurdleLeft < 100 && hurdleLeft > 50 && playerBottom < 40) {
        alert("💥 Crashed Successfully! Press OK to play again.");
        location.reload();
      }
    }, 10);
  </script>
