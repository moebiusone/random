
function getEncounterIdea() {
    var locationDescriptors=new Array();
    addItemToArray(locationDescriptors, 'Road');
    addItemToArray(locationDescriptors, 'Dungeon');
    addItemToArray(locationDescriptors, 'Inn');
    addItemToArray(locationDescriptors, 'Tavern');
    addItemToArray(locationDescriptors, 'Market');
    addItemToArray(locationDescriptors, 'Ruin');
    addItemToArray(locationDescriptors, 'Temple');
    addItemToArray(locationDescriptors, 'Church');
    addItemToArray(locationDescriptors, 'Castle');
    addItemToArray(locationDescriptors, 'Keep');
    addItemToArray(locationDescriptors, 'Tower');
    addItemToArray(locationDescriptors, 'Wall');
    addItemToArray(locationDescriptors, 'Desert');
    addItemToArray(locationDescriptors, 'Forest');
    addItemToArray(locationDescriptors, 'Plains');
    addItemToArray(locationDescriptors, 'Ocean');
    addItemToArray(locationDescriptors, 'Dock');
    addItemToArray(locationDescriptors, 'Boat');
    addItemToArray(locationDescriptors, 'Hill');
    addItemToArray(locationDescriptors, 'Mountain');
    addItemToArray(locationDescriptors, 'Cliff');
    addItemToArray(locationDescriptors, 'Gallery');
    addItemToArray(locationDescriptors, 'Jail/Prison');
    addItemToArray(locationDescriptors, 'Jungle');
    addItemToArray(locationDescriptors, 'Arctic');
    addItemToArray(locationDescriptors, 'Rural');
    addItemToArray(locationDescriptors, 'Cave');
    addItemToArray(locationDescriptors, 'Home');
    addItemToArray(locationDescriptors, 'Elsewhere');
    addItemToArray(locationDescriptors, 'Town');
    addItemToArray(locationDescriptors, 'City');
    addItemToArray(locationDescriptors, 'Kingdom');
    addItemToArray(locationDescriptors, 'Village');
    addItemToArray(locationDescriptors, 'Island');
    addItemToArray(locationDescriptors, 'School');
    addItemToArray(locationDescriptors, 'Country');
    addItemToArray(locationDescriptors, 'Smithy');

    var plotDescriptors=new Array();
    addItemToArray(plotDescriptors, 'Monster');
    addItemToArray(plotDescriptors, 'Bandits');
    addItemToArray(plotDescriptors, 'Lost');
    addItemToArray(plotDescriptors, 'Kidnapped');
    addItemToArray(plotDescriptors, 'Blackmailed');
    addItemToArray(plotDescriptors, 'Murdered');
    addItemToArray(plotDescriptors, 'Theft');
    addItemToArray(plotDescriptors, 'Moving');
    addItemToArray(plotDescriptors, 'Terror');
    addItemToArray(plotDescriptors, 'Politics');
    addItemToArray(plotDescriptors, 'Love');
    addItemToArray(plotDescriptors, 'Quest');
    addItemToArray(plotDescriptors, 'Experiment');
    addItemToArray(plotDescriptors, 'War');
    addItemToArray(plotDescriptors, 'Fate');
    addItemToArray(plotDescriptors, 'Protection');
    addItemToArray(plotDescriptors, 'Hatred');
    addItemToArray(plotDescriptors, 'Abuser');
    addItemToArray(plotDescriptors, 'Disaster');
    addItemToArray(plotDescriptors, 'McGuffin');
    addItemToArray(plotDescriptors, 'Prophecy');
    addItemToArray(plotDescriptors, 'Investigation');
    addItemToArray(plotDescriptors, 'Weather');
    addItemToArray(plotDescriptors, 'Gods');        
    addItemToArray(plotDescriptors, 'Revenge');        
    addItemToArray(plotDescriptors, 'Revolt');        
    addItemToArray(plotDescriptors, 'Misfortune');        
    addItemToArray(plotDescriptors, 'Enigma');        
    addItemToArray(plotDescriptors, 'Adultery');        
    addItemToArray(plotDescriptors, 'Sacrifice');        
    addItemToArray(plotDescriptors, 'Rivalry');        
    addItemToArray(plotDescriptors, 'Ambition');        
    addItemToArray(plotDescriptors, 'Remorse');        
    addItemToArray(plotDescriptors, 'Recovery');        
    addItemToArray(plotDescriptors, 'Loss');        

    var subjectDescriptors=new Array();
    addItemToArray(subjectDescriptors, 'Family');
    addItemToArray(subjectDescriptors, 'Royalty');
    addItemToArray(subjectDescriptors, 'Guild');
    addItemToArray(subjectDescriptors, 'Friend');
    addItemToArray(subjectDescriptors, 'Child');
    addItemToArray(subjectDescriptors, 'Parent');
    addItemToArray(subjectDescriptors, 'Lover');
    addItemToArray(subjectDescriptors, 'Hero');
    addItemToArray(subjectDescriptors, 'Elderly');
    addItemToArray(subjectDescriptors, 'Creature');
    addItemToArray(subjectDescriptors, 'Pet');
    addItemToArray(subjectDescriptors, 'Soldier');
    addItemToArray(subjectDescriptors, 'Sailor');
    addItemToArray(subjectDescriptors, 'Merchant');
    addItemToArray(subjectDescriptors, 'Artist');
    addItemToArray(subjectDescriptors, 'Orphan');
    addItemToArray(subjectDescriptors, 'Wise One');
    addItemToArray(subjectDescriptors, 'Escort');
    addItemToArray(subjectDescriptors, 'Bodyguard');
    addItemToArray(subjectDescriptors, 'Servant');
    addItemToArray(subjectDescriptors, 'Maid');
    addItemToArray(subjectDescriptors, 'Butler');
    addItemToArray(subjectDescriptors, 'Pet');
    addItemToArray(subjectDescriptors, 'Art');
    addItemToArray(subjectDescriptors, 'Merchandise');
    addItemToArray(subjectDescriptors, 'Priest');
    addItemToArray(subjectDescriptors, 'Outsider');
    addItemToArray(subjectDescriptors, 'Criminal');
    addItemToArray(subjectDescriptors, 'Kinsman');
    addItemToArray(subjectDescriptors, 'Supplicant');
    addItemToArray(subjectDescriptors, 'Prisoner');
    addItemToArray(subjectDescriptors, 'Slave');
    addItemToArray(subjectDescriptors, 'Artisan');

    document.write('<ul>');
    var locationDescrip = getItemFromArray(locationDescriptors);
    var plotDescrip = getItemFromArray(plotDescriptors);
    var subjectDescrip = getItemFromArray(subjectDescriptors);
    document.write('<li><h2>Location: ' +   locationDescrip + '</h2></li>');
    document.write('<li><h2>Plot: ' +   plotDescrip + '</h2></li>');
    document.write('<li><h2>Subject: ' +    subjectDescrip + '</h2></li>');
    document.write('</ul>');
}


