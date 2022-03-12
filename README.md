# Microfrontends 2

A deeper look into the concept and workings of microfrontends. 

The Container app is the overall holder/connector of the different microfrontends:
- Auth (React)
- Dashboard (Vue)
- Marketing (React) 

The aim of the project is to get the three microfrontends working together via the hosting Container app. 
Thus the functionality of the individual apps is not very complicated, but rather its the overall architecture and interplay of the different JS frameworks of each microfrontend that is the focus of this project of mine.  

## Styling 🎨

 Material UI was used for the styling of the React apps.

## CI/CD Pipeline ✅

A CI/CD pipeline is configured utilising Github actions.

## Hosted with Amazon Web Services (AWS) ☁
Visit deployed site [here](https://d73a36fic7wcj.cloudfront.net/).
AWS S3 and CloudFront services were used. 