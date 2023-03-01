# Metacritic-Analysis
![metacritic](https://user-images.githubusercontent.com/107484694/222056847-0d7d8fc6-7e03-4c1f-a9ec-802a0f65ce92.jpg)

## Overview
Metacritic is a site that I use as often as any other. It offers a look into media that will be released as well as reviews of media that has been. Metascores are aggregate ratings that are assigned based on several media publications including Pitchfork, The New York Times, The Los Angeles Times, Rolling Stone, The Wall Street Journal, The Philadelphia Inquirer, Gamespot, IGN, Entertainment Weekly, and People Magazine to name more than a few. Metacritic also allows for users to rate these releases and the user scores are displayed as well. Looking into some of my favorite releases and seeing very unfavorable metascores next to more realistic user scores led me to investigate Metacritic data at a larger scale. 

## Methodology
I’ve decided to see how differently rankings would look after calculating a weighted average between the scores. User scores were multiplied by (6/10) and metascores were multiplied by (4/10) before being combined. The entries were then ranked based on the weighted averages to compare to their original rankings. Unscored entries were dropped from the data.

Initially, PostgreSQL was used to clean and query the data, but errors encountered along the way led to the use of Jupyter Notebook and pandas. 

![CSV Newline ERROR](https://user-images.githubusercontent.com/107484694/222056903-8ba77089-0219-41d2-85fd-4cac812acd9f.png)

With Jupyter Notebook, the data was quickly uploaded, transformed, and exported. Rows with ‘TBD’ for user scores were dropped and the column originally labeled as ‘sort number’ was renamed ‘original metarank’ so that it could be referenced after the weighted rankings were calculated. 

### Music Rankings 
<img width="936" alt="musicrankings" src="https://user-images.githubusercontent.com/107484694/222055433-0567efe9-95e8-406f-a043-a2a88a02123e.png">

### Movie Rankings 
<img width="936" alt="movierankings" src="https://user-images.githubusercontent.com/107484694/222055453-7f2f0f17-e6d6-44a2-8182-3c34cd008aa9.png">

### TV Rankings 
<img width="936" alt="tvrankings" src="https://user-images.githubusercontent.com/107484694/222055472-f8ddf17d-d590-4c79-8bc6-fec078c3b73b.png">

### Game Rankings 
<img width="936" alt="gamerankings" src="https://user-images.githubusercontent.com/107484694/222055498-b96add80-6138-4b0f-8b7a-02822ae14f02.png">

## Visualization
Tableau was used to visualize the updated data. A searchable filter was implemented to help users navigate the data according to their interests. User score, metascore, weighted average, and rankings were the columns listed so that they could be easily compared side by side.  
### Test Search
<img width="1402" alt="metacritictableau" src="https://user-images.githubusercontent.com/107484694/222058408-1a77f5c3-2d1f-4bba-ba45-13af17193cfa.png">

