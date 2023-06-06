function ganador(jugador1, jugador2) {
    switch (jugador1) {
      case 1:
        switch (jugador2) {
          case 1:
            document.write("Empate: Ambos escogieron roca");
            break;
          case 2:
            document.write("Gana jugador 2: Papel cubre roca");
            break;
          case 3:
            document.write("Gana jugador 1: Roca rompe tijeras");
            break;
        }
        break;
      case 2:
        switch (jugador2) {
          case 1:
            document.write("Gana jugador 1: Roca rompe tijeras");
            break;
          case 2:
            document.write("Empate: Ambos escogieron papel");
            break;
          case 3:
            document.write("Gana jugador 2: Tijeras corta papel");
            break;
        }
        break;
      case 3:
        switch (jugador2) {
          case 1:
            document.write("Gana jugador 2: Roca rompe tijeras");
            break;
          case 2:
            document.write("Gana jugador 1: Tijeras corta papel");
            break;
          case 3:
            document.write("Empate: Ambos escogieron tijeras");
            break;
        }
        break;
    }
  }