# 🌐 README

---
Images
![image](https://github.com/user-attachments/assets/b20eff36-1214-4086-9d1b-5cd380b3d63e)
---
## 🇬🇧 **English Version**

### **1. Changing the Central Logo**
- **File:** `index.html`
- **Location:** Within the `<div class="img-center">` block.
- **How to Change:**
    ```html
    <div class="img-center noselect">
        <img src="https://your-new-logo-url.com/logo.png" width="300" alt="Logo">
    </div>
    ```
    - **Replace the `src` attribute** with the URL or path to your new logo image.
    - **Ensure the `alt` attribute** accurately describes your logo for accessibility.

### **2. Updating Staff Team Members**
- **File:** `index.html`
- **Location:** Within the `<div class="scroll-box">` block.
- **How to Change:**
    ```html
    <div class="person">
        <img src="https://your-image-url.com/member1.png" alt="Member Name">
        <span class="menu-text">MemberName<br>
           <div class="role-class"> Role </div>
        </span>
    </div>
    ```
    - **Image:** Update the `src` attribute with the member's image URL or path.
    - **Name:** Replace `MemberName` with the actual name.
    - **Role:** Replace `Role` with the member's role (e.g., Owner, Manager).
    - **Class:** Ensure the role div uses the correct class (e.g., `owner-role`, `manager-role`) for consistent styling.

### **3. Modifying Songs and Their Names**
- **File:** `script/main.js`
- **Location:** Within the `songs` array.
- **How to Change:**
    ```javascript
    const songs = [
        {
            src: "sound/newsong1.mp3",
            name: "Artist - Song Title"
        },
        {
            src: "sound/newsong2.mp3",
            name: "Artist - Another Song"
        },
        // Add or remove song objects as needed
    ];
    ```
    - **`src`:** Provide the path to the new song file.
    - **`name`:** Enter the song's display name.
    - **Note:** Ensure that the song files are placed in the appropriate directory (`sound/`).

### **4. Changing the Discord Link**
- **File:** `index.html`
- **Location:** Within the `<div class="web-discord">` block.
- **How to Change:**
    ```html
    <div class="web-discord">
        <a href="https://your-new-discord-link.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <i class="fab fa-discord"></i>
        </a>
    </div>
    ```
    - **Replace the `href` attribute** with your new Discord invite link.

### **5. Updating the TikTok Link**
- **File:** `index.html`
- **Location:** Within the `<div class="web-tiktok">` block.
- **How to Change:**
    ```html
    <div class="web-tiktok">
        <a href="https://your-new-tiktok-link.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i class="fab fa-tiktok"></i>
        </a>
    </div>
    ```
    - **Replace the `href` attribute** with your new TikTok profile link.

### **6. Changing the Website Link**
- **File:** `index.html`
- **Location:** Within the `<div class="web-website">` block.
- **How to Change:**
    ```html
    <div class="web-website">
        <a href="https://your-new-website-link.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <i class="fas fa-globe"></i>
        </a>
    </div>
    ```
    - **Replace the `href` attribute** with your new website URL.

### **7. Replacing Other Logos (Optional)**
- **File:** `css/style.css`
- **Location:** If there are additional logos or icons, ensure their paths in the CSS are updated accordingly.
- **How to Change:**
    ```css
    .web-discord i,
    .web-tiktok i,
    .web-website i {
        background-image: url('path-to-new-icon.png');
        /* Additional styling as needed */
    }
    ```
    - **Update the `background-image`** or other relevant CSS properties to point to your new icon assets.

---

## 🇫🇷 **Version Française**

### **1. Changer le Logo Central**
- **Fichier :** `index.html`
- **Emplacement :** Dans le bloc `<div class="img-center">`.
- **Comment Changer :**
    ```html
    <div class="img-center noselect">
        <img src="https://votre-nouvelle-url-logo.com/logo.png" width="300" alt="Logo">
    </div>
    ```
    - **Remplacez l'attribut `src`** par l'URL ou le chemin vers votre nouvelle image de logo.
    - **Assurez-vous que l'attribut `alt`** décrit correctement votre logo pour l'accessibilité.

### **2. Mettre à Jour les Membres de l'Équipe**
- **Fichier :** `index.html`
- **Emplacement :** Dans le bloc `<div class="scroll-box">`.
- **Comment Changer :**
    ```html
    <div class="person">
        <img src="https://votre-url-image.com/membre1.png" alt="Nom du Membre">
        <span class="menu-text">NomDuMembre<br>
           <div class="classe-role"> Rôle </div>
        </span>
    </div>
    ```
    - **Image :** Mettez à jour l'attribut `src` avec l'URL ou le chemin de l'image du membre.
    - **Nom :** Remplacez `NomDuMembre` par le nom réel.
    - **Rôle :** Remplacez `Rôle` par le rôle du membre (par exemple, Propriétaire, Manager).
    - **Classe :** Assurez-vous que la div du rôle utilise la classe correcte (par exemple, `owner-role`, `manager-role`) pour un style cohérent.

### **3. Modifier les Chansons et leurs Noms**
- **Fichier :** `script/main.js`
- **Emplacement :** Dans le tableau `songs`.
- **Comment Changer :**
    ```javascript
    const songs = [
        {
            src: "sound/nouvellesong1.mp3",
            name: "Artiste - Titre de la Chanson"
        },
        {
            src: "sound/nouvellesong2.mp3",
            name: "Artiste - Une Autre Chanson"
        },
        // Ajoutez ou supprimez des objets chanson selon les besoins
    ];
    ```
    - **`src` :** Fournissez le chemin vers le nouveau fichier audio.
    - **`name` :** Entrez le nom affiché de la chanson.
    - **Remarque :** Assurez-vous que les fichiers audio sont placés dans le répertoire approprié (`sound/`).

### **4. Changer le Lien Discord**
- **Fichier :** `index.html`
- **Emplacement :** Dans le bloc `<div class="web-discord">`.
- **Comment Changer :**
    ```html
    <div class="web-discord">
        <a href="https://votre-nouveau-lien-discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <i class="fab fa-discord"></i>
        </a>
    </div>
    ```
    - **Remplacez l'attribut `href`** par votre nouveau lien d'invitation Discord.

### **5. Mettre à Jour le Lien TikTok**
- **Fichier :** `index.html`
- **Emplacement :** Dans le bloc `<div class="web-tiktok">`.
- **Comment Changer :**
    ```html
    <div class="web-tiktok">
        <a href="https://votre-nouveau-lien-tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i class="fab fa-tiktok"></i>
        </a>
    </div>
    ```
    - **Remplacez l'attribut `href`** par le lien de votre nouveau profil TikTok.

### **6. Changer le Lien du Site Web**
- **Fichier :** `index.html`
- **Emplacement :** Dans le bloc `<div class="web-website">`.
- **Comment Changer :**
    ```html
    <div class="web-website">
        <a href="https://votre-nouveau-lien-site.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <i class="fas fa-globe"></i>
        </a>
    </div>
    ```
    - **Remplacez l'attribut `href`** par l'URL de votre nouveau site web.

### **7. Remplacer d'Autres Logos (Optionnel)**
- **Fichier :** `css/style.css`
- **Emplacement :** Si d'autres logos ou icônes existent, assurez-vous que leurs chemins dans le CSS sont mis à jour en conséquence.
- **Comment Changer :**
    ```css
    .web-discord i,
    .web-tiktok i,
    .web-website i {
        background-image: url('chemin-vers-nouvelle-icone.png');
        /* Styles supplémentaires selon les besoins */
    }
    ```
    - **Mettez à jour `background-image`** ou d'autres propriétés CSS pertinentes pour pointer vers vos nouveaux assets d'icône.

---

# 🚀 **Support**

If you encounter any issues or have questions, feel free to reach out through our [Discord](https://discord.gg/fast-fa).

# 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
