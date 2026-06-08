<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Chart Page</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="c3.css">

    <!-- Load d3 BEFORE c3 -->
    <script src="d3.js"></script>
    <script src="c3.js"></script>
    <script src="script.js"></script>
</head>

<body onload="load()">

    <!-- Navigation -->
    <nav id="navbar">
        <a href="index.html">Home Page</a>
        <a href="infopage.html">Info Page</a>
        <a href="chart.html">Chart Page</a>
    </nav>

    <!-- Header -->
    <header id="banner">
        <h1>Data Chart</h1>
    </header>

    <!-- Introduction -->
    <section class="intro">
        <h2>Chart Page</h2>
        <p>
            This page contains information about NYC environmental data.
        </p>
    </section>

    <!-- Chart Controls -->
    <section class="controls">
        <p>
            <span class="highlight">Scenario:</span>
            Chart analyzes environmental measurements.
        </p>

        <select id="chartType">
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="pie">Pie</option>
            <option value="donut">Donut</option>
        </select>

        <button onclick="TreesByName()">
            Display
        </button>
    </section>

    <!-- Chart Output -->
    <section class="chart-section">
        <div id="output"></div>
    </section>

    <!-- Footer -->
    <footer id="footer">
        <p>© 2026 NYC Data Project</p>
    </footer>

</body>
</html>