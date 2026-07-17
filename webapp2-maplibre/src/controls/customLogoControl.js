import logoMapid from "../../src/logo/Mapid.png";

export class LogoMapidControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
            <img
                src="${logoMapid}"
                alt="Logo Mapid"
                style="width: 50px"
            >
        `
        return this._container;
    }

    onRemove() {
        this._container.remove();
        this._map = undefined;
    }
}