// Función para marcar un curso como aprobado
function aprobarCurso(cursoId, requisitos) {
    // Si todos los requisitos están aprobados
    if (requisitos.every(req => document.getElementById(req).classList.contains('aprobado'))) {
        const curso = document.getElementById(cursoId);
        curso.classList.add('aprobado');  // Marca el curso como aprobado
        alert('¡Curso aprobado! Ahora puedes desbloquear el siguiente curso.');
    } else {
        alert('Aún no has aprobado los requisitos necesarios.');
    }
}

// Ciclo 1
document.getElementById('fundamentos-economia').addEventListener('click', function() {
    aprobarCurso('introduccion-micro', []);
});
document.getElementById('matematica-basica').addEventListener('click', function() {
    aprobarCurso('contabilidad-general', []);
});

// Ciclo 2
document.getElementById('introduccion-micro').addEventListener('click', function() {
    aprobarCurso('microeconomia-avanzada', ['fundamentos-economia']);
});
document.getElementById('contabilidad-general').addEventListener('click', function() {
    aprobarCurso('contabilidad-financiera', ['matematica-basica']);
});

// Ciclo 3
document.getElementById('microeconomia-avanzada').addEventListener('click', function() {
    aprobarCurso('microeconomia-aplicada', ['introduccion-micro']);
});
document.getElementById('contabilidad-financiera').addEventListener('click', function() {
    aprobarCurso('finanzas-corporativas', ['contabilidad-general']);
});
document.getElementById('finanzas-corporativas').addEventListener('click', function() {
    aprobarCurso('finanzas-corporativas-ii', ['contabilidad-financiera']);
});

// Ciclo 4
document.getElementById('microeconomia-aplicada').addEventListener('click', function() {
    aprobarCurso('macroeconomia-aplicada', ['microeconomia-avanzada']);
});
document.getElementById('macroeconomia-avanzada').addEventListener('click', function() {
    aprobarCurso('macroeconomia-aplicada', ['microeconomia-aplicada']);
});
document.getElementById('matematica-avanzada').addEventListener('click', function() {
    aprobarCurso('estadistica-economistas', ['matematica-avanzada']);
});
document.getElementById('teoria-juegos').addEventListener('click', function() {
    aprobarCurso('historia-economica', []);
});
document.getElementById('historia-economica').addEventListener('click', function() {
    aprobarCurso('historia-pensamiento-economico', ['teoria-juegos']);
});

// Ciclo 5
document.getElementById('macroeconomia-aplicada').addEventListener('click', function() {
    aprobarCurso('organizacion-industrial', ['macroeconomia-aplicada']);
});
document.getElementById('finanzas-corporativas-ii').addEventListener('click', function() {
    aprobarCurso('instrumentos-renta-variable', ['finanzas-corporativas']);
});
document.getElementById('estadistica-economistas').addEventListener('click', function() {
    aprobarCurso('data-analytics', ['estadistica']);
});
document.getElementById('informatica-economistas').addEventListener('click', function() {
    aprobarCurso('electivo-carrera', ['informatica-economistas']);
});
