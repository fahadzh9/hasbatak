// Shared helpers for all calculators
document.getElementById("yr").textContent = new Date().getFullYear();

function num(id) {
  var el = document.getElementById(id);
  if (!el) return 0;
  // accept Arabic-Indic digits and commas
  var v = String(el.value)
    .replace(/[٠-٩]/g, function (d) { return "٠١٢٣٤٥٦٧٨٩".indexOf(d); })
    .replace(/[,٬\s]/g, "")
    .replace("٫", ".");
  var n = parseFloat(v);
  return isFinite(n) ? n : 0;
}

function sar(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ريال";
}

function showResult(id, html) {
  var box = document.getElementById(id);
  box.innerHTML = html;
  box.classList.add("show");
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function rows(list) {
  return "<table>" + list.map(function (r) {
    return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>";
  }).join("") + "</table>";
}

// Ad units: push each AdSense slot once the library is present
window.addEventListener("load", function () {
  if (!window.adsbygoogle) return;
  document.querySelectorAll("ins.adsbygoogle").forEach(function () {
    try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  });
});
