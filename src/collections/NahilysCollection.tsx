import { buildCollection } from "@firecms/core";

export const abayaCollection = buildCollection({
  id: "products",
  path: "products",
  name: "Produits",
  singularName: "Produit",
  group: "Catalogue",
  defaultSize: "m",
  properties: {
    ref: { name: "Référence", dataType: "string" },
    active: {
      name: "Actif",
      dataType: "boolean",
      description: "Produit visible sur le site"
    },
    name: {
      name: "Nom du produit",
      dataType: "string",
      validation: { required: true }
    },
    slug: {
      name: "Slug (URL)",
      dataType: "string",
      validation: { required: true }
    },
    sub_description: {
      name: "Sous-description",
      dataType: "string"
    },
    description: {
      name: "Description",
      dataType: "string",
      multiline: true,
      description: `Écrivez la description en HTML. Règles à suivre :
• Paragraphe → <p>Votre texte</p>
• Titre de section → <h3>Titre</h3>
• Liste à puces → <ul> avec <li> pour chaque élément
• Mot en gras → <span class='label'>Mot :</span>
Exemple : <p>Bonjour</p><h3>Titre</h3><ul><li>Point 1</li></ul>`
      
    },
    image: {
      name: "Image principale",
      dataType: "string",
      validation: { required: true },
        description: `les images doivent d'abord etre mis dans le site, puis recopier le liens des image ici`
    },
    gallery: {
      name: "Galerie",
      dataType: "array",
      of: { dataType: "string" },
       description: `les images doivent d'abord etre mis dans le site, puis recopier le liens des image ici`
    },
    base_price: {
      name: "Prix de base (centimes)",
      dataType: "number",
      validation: { required: true, min: 0 },
      description: "Ex: 4990 = 49,90€"
    },
    metadata: {
      name: "SEO / Métadonnées",
      dataType: "map",
      properties: {
        seo_title: { name: "Titre SEO", dataType: "string" },
        
        seo_description: {
          name: "Description SEO",
          dataType: "string",
          multiline: true
        }
      }
    },
    variants: {
      name: "Variants",
      dataType: "array",
      of: {
        dataType: "map",
        properties: {
          sku: {
            name: "SKU",
            dataType: "string",
            validation: { required: true }
          },
          attributes: {
            name: "Attributs",
            dataType: "map",
            properties: {
              color: { name: "Couleur", dataType: "string" },
              code_color: { name: "Code couleur", dataType: "string" },
              size: { name: "Taille", dataType: "string" }
            }
          },
          price_override: {
            name: "Prix personnalisé",
            dataType: "number"
          },
          inventory_quantity: {
            name: "Stock",
            dataType: "number",
            validation: { required: true, min: 0 }
          },
          image: {
            name: "Image variante",
            dataType: "string"
          }
        }
      }
    }
  }
});
