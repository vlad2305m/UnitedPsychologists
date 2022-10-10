[psyhelpworld.com](psyhelpworld.com)


   - 📄 [list](https://vlad2305m.github.io/UnitedPsychologists/list.html)

- 1 All custom scripts should be stored in this repository and then loaded to the website (for redundancy).
- 2 Website follows multilanguage system with language stored in URL. Pages are linked automatically by [language-links.js](https://vlad2305m.github.io/UnitedPsychologists/menu/language-links.js).
- 3 Filters for psychologists are defined in [data.js](https://vlad2305m.github.io/UnitedPsychologists/matcher/data.js), format $\text{category}*100+\text{option}$, any combination of options is possible. Key=URL
- 4 Psychologists are arranged wrt date in backwards order, so for new ones click "previous month" like 20 times with autoclicker and select 1st day of the needed month. Ideally save a dictionary somewhere to add faster. (Same date in all languages)
- 5 The best solution for debugging/prototyping is to save everything for local overrides and put git pulling/pushing scripts in that directory, but usually I just change something directly here and wait for 1 min until changes apply to test.
- 6 You can monitor the progress of deployment in [actions](https://github.com/vlad2305m/UnitedPsychologists/actions).
File tree is for quick navigation. Run the workfow action when needed to update the tree.
