const rootElement = document.querySelector('#root');

rootElement.insertAdjacentHTML('afterbegin', `
<form>

<h1>Visszajelzés</h1>
<input type='text' placeholder='Tárgy'>
<textarea placeholder="Megjegyzés"></textarea>

<div>
<input type="checkbox">
<p>Elolvastam és elfogadom az Adatkezelési Tájékoztatót.</p>
</div>

<div>
<input type="checkbox">
<p>Szeretnék hirlevelet kapni.</p>
</div>

<div>
<button>Mentés</button>
</div>

</form>
`
)