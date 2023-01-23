var edad = parseInt(prompt("Hola, esta es una página con fines extraños ＼(＾▽＾)／, por favor ingresa tu edad", 0));

if (edad >= 18) {
    alert("Acceso permitido al pantano");
    var nombre = prompt("Ingresa tu nombre");
    var apellido = prompt("Ingresa tu apellido");
    var direccion = prompt("Ingresa tu dirección");
    var telefono = parseInt(prompt("Ingresa tu telefono", 0));
    if (telefono == NaN) {
        console.log("teléfono inválido")
    }
    var correo = prompt("Ingresa tu correo");

    document.write("Bievenido al pantano, ", nombre, apellido, "<br>");
    document.write("Tu edad es: " + edad, " fresquito para el pantanito <br>");
    document.write("Tu dirección es: " + direccion, "<br>");
    document.write("Tu teléfono es: " + telefono, "<br>");
    document.write("Tu correo es: " + correo, "<br>");
    document.write("     ⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀            ", "<br>");
    document.write("   ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀            ", "<br>");
    document.write("    ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀           ", "<br>");
    document.write("   ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀           ", "<br>");
    document.write("   ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆          ", "<br>");
    document.write("   ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿         ", "<br>");
    document.write("   ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀          ", "<br>");
    document.write("   ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀          ", "<br>");
    document.write("   ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀          ", "<br>");
    document.write("   ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀           ", "<br>");
    document.write("   ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀           ", "<br>");
    document.write("   ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀           ", "<br>");
    document.write("   ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀           ", "<br>");
    document.write("   ⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀            ", "<br>");
    document.write("   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉                           ", "<br>");
    document.write("                                                     ", "<br>");


} else {
    alert("(╥︣﹏᷅╥) Acceso denegado, FUERA DE MI PANTANO (╥︣﹏᷅╥)", "<br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣧⣿⣴⣷⣟⠱⠟⡒⠿⠿⠦⢤⣤⡬⠍⠁⠠⠟⣿⣧⣤⣀⣸⣇⡀⠀⢠⣀⠟⠉⠀⠀⠀⠀⠀⠀⢀⣽⣿⣿⣿⣿⣿", "</br>");
    document.write("⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡴⢿⣧⣴⡆⣠⠀⠈⠙⣦⡴⠖⠋⠉⠁⠀⠀⠀⠈⠉⠳⢦⣄⠈⠀⠀⠀⠀⠀⣸⠴⠾⠛⠿⣿⣿⣿⣿", "</br>");
    document.write("⡣⣬⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠁⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⢠⣅⣰⣶⠿⣿⣶⡄⢁⣈⢻⣿⣿⣿", "</br>");
    document.write("⣿⡿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⢫⡍⠙⣿⣷⣾⣿⣾⣿⣦⣽⣿⣿", "</br>");
    document.write("⣿⣧⣸⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡿⢿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⢸⢹⠀⠘⣿⣿⣿⣿⣙⣿⣿⣿⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠙⠿⣿⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠃⣬⣛⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣠⣞⡁⠀⠀⠀⠀⣠⣴⠾⠿⣿⣶⣄⠀⠀⠀⠙⢦⡀⠀⠀⠀⢀⣴⡟⠉⠉⠁⣸⣿⠋⠉⠛⠿⠏⢻⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠙⢆⠀⠀⢀⡟⠁⠀⠀⠀⠉⠉⠳⠤⠀⠀⠈⣿⡆⠀⠀⠸⠉⠃⠀⠀⠀⣤⠀⠀⠀⢀⣀⡀⢸⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣱⣿⣿⡀⠀⠈⣧⠀⠀⣇⠀⢤⠀⠀⠀⠀⠀⠀⢀⣤⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣷⣿⢡⣾⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡤⢬⣧⠀⠻⢄⣼⣶⡖⠒⣲⣶⢾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢬⣷⣿⣿⣿", "</br>");
    document.write("⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣀⣦⡿⠀⠀⠀⠙⠿⠥⠴⢛⣡⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿", "</br>");
    document.write("⣷⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠙⠋⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⢻⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢻⡄⠀⠀⠀⢀⣴⣶⣶⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣿⣷⣸⢿⣄⠀⠙⠧⣬⣿⠿⠟⠁⠀⠀⢠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⢀⡇⣸⣿⣎⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⢸⣏⣿⡹⣿⢸⣿⣆⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⣻⣿⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⠻⠿⣿⣿⡆⠑⠂⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡟⢀⣽⣿⢻", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⡃⠐⣿⣟⣻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⢫⣴⣾⣿⣻⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠘⣿⢿⣿⡧⢰⣿⣿⣯⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡿⢣⣾⣿⣿⣿⡟⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⢹⡟⢶⣿⠿⣿⣿⣿⣾⣿⡀⢄⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠃⠀⠀⢀⣴⡾⠯⢞⣵⣿⣿⣿⣿⣿⠠⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢷⣴⣿⣿⣿⣿⡿⣷⡟⢷⡀⠑⢶⣤⣤⣤⣤⣴⣾⣿⡀⣀⣀⣴⣶⡿⠟⢉⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿", "</br>");
    document.write("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣽⣿⣿⣦⡙⢦⡀⠀⠳⠬⠽⢯⣝⣿⣫⣹⠯⠄⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿", "</br>");
    document.write("⠛⠛⠋⠹⢿⣿⡿⢿⣿⣇⠀⠀⢸⣿⣿⣿⣟⣿⣟⣿⣿⣏⣿⣾⣟⢦⣀⠀⠀⠀⠈⠁⠈⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿", "</br>");
    document.write("⠀⠀⠀⠀⢀⣀⣠⣤⣭⣽⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣄⣀⣀⣤⣴⣾⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿", "</br>");
}

