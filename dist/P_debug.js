(function(){var mods = ["P","anim/Anim","anim/Timeline","base/code","base/feature","base/dom","base/events","base/http","base/kinetic","base/utils","base/services","base/ua","base/webgl","control/Control","control/Loading","core/math/Math","core/math/Matrix","core/math/Vector3","core/Camera","core/geom/Latlng","core/geom/Point","core/geom/spherical","core/object/CubePreview","core/object/Cube","core/object/Loader","interaction/Interaction","interaction/DragObject","interaction/Drag","interaction/Keyboard","interaction/PinchZoom","interaction/WheelZoom","render/CssRender","render/WebGLRender","render/BasicRender","overlays/LabelLayer","core/Pano","overlays/Overlay","overlays/Icon","overlays/Label","overlays/Span","provider/BasicProvider","provider/HQTProvider","provider/LocalProvider","provider/Provider","provider/QQProvider"];var base=window.PANO_BASE_LIB||"../../src/";var tpl="<script type='text/javascript' src='"+base+"{url}.js?{stamp}'></script>";for(var i in mods){document.write(tpl.replace("{url}",mods[i]));}}());