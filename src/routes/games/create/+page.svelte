<script>
</script>

<div class="container my-5">
  <h2>Neues Spiel hinzufügen</h2>

  <form method="POST">
    <div class="mb-3">
      <label for="appid" class="form-label">App ID*</label>
      <input type="number" class="form-control" id="appid" name="appid" required />
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">Name*</label>
      <input type="text" class="form-control" id="name" name="name" required />
    </div>

    <div class="mb-3">
      <label for="release_date" class="form-label">Veröffentlichungsdatum</label>
      <input type="date" class="form-control" id="release_date" name="release_date" />
    </div>

    <div class="mb-3">
      <label for="developer_id" class="form-label">Entwickler ID*</label>
      <input type="number" class="form-control" id="developer_id" name="developer_id" required />
    </div>

    <div class="mb-3">
      <label for="platforms" class="form-label">Plattformen (Komma getrennt)</label>
      <input type="text" class="form-control" id="platforms" name="platforms" />
    </div>

    <div class="mb-3">
      <label for="required_age" class="form-label">Mindestalter</label>
      <input type="number" class="form-control" id="required_age" name="required_age" />
    </div>

    <div class="mb-3">
      <label for="genres" class="form-label">Genres (Komma getrennt)</label>
      <input type="text" class="form-control" id="genres" name="genres" />
    </div>

    <div class="mb-3">
      <label for="price" class="form-label">Preis (CHF)*</label>
      <input type="number" step="0.01" class="form-control" id="price" name="price" required />
    </div>

    <div class="mb-3">
      <label for="average_playtime" class="form-label">Durchschnittliche Spielzeit (Minuten)</label>
      <input type="number" class="form-control" id="average_playtime" name="average_playtime" />
    </div>

    <button type="submit" class="btn btn-success">Speichern</button>
    <a href="/games" class="btn btn-outline-secondary ms-2">Abbrechen</a>
  </form>
</div>
