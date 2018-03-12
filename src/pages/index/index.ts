import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DescriptionPage } from '../description/description';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  roles = [ 'one', 'two', 'three' ];

  one = [
			{'name': 'Alpha Wolf', 'mystic': 0, 'corrupt': 1, 'faction':'Wolf Pack',
			 'description':'Strongest wolf. Every night has the option to attack anyone, including another wolf or himself.'},
			{'name': 'Pack Wolf', 'mystic': 0, 'corrupt': 1, 'faction':'Wolf Pack',
			 'description': 'If the Alpha Wolf is dead, every night has the option to attack someone, including another wolf or himself'},
			{'name': 'Wolf Pup', 'mystic': 0, 'corrupt': 1, 'faction':'Wolf Pack',
			 'description': "Can't attack. If BURNED AT THE STAKE, the following night the Wolves can attack TWICE."},
			{'name': 'Defector', 'mystic': 0, 'corrupt': 1, 'faction':'Works with Wolves',
			 'description': 'Is identified by the Wolves during the first night. If attacked by Wolves, he does not die and instead opens its eyes. Wins if Wolves win.'},
			{'name': 'Clairvoyant', 'mystic': 1, 'corrupt': 0, 'faction':'Village', 
			 'description': 'Every night chooses a living player, and discovers if it is corrupted'},
			{'name': 'Medium', 'mystic': 1, 'corrupt': 0, 'faction':'Village', 
			 'description': 'Every night chooses a dead player, and discovers if it is corrupted'},
			{'name': 'Wizard', 'mystic': 1, 'corrupt': 0, 'faction':'Village', 
			 'description': 'Every night chooses a living player, and discovers if it is a mystic'},
			{'name': 'Witch', 'mystic': 1, 'corrupt': 0, 'faction':'Village', 
			 'description': 'Every night chooses another living player; that player is protected from Shadow attacks for the night'},
			{'name': 'Healer', 'mystic': 1, 'corrupt': 0, 'faction':'Village', 
			 'description': 'Every night learns the players dying in that night. Once per game and unless dying, can select one of the dying and prevent its death.'},
			{'name': 'Bard', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': 'If alive at dawn and the Clairvoyant checked a non-corrupt player, the moderator informs the players.'},
			{'name': 'Innkeeper', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': 'If alive at dawn and the Clairvoyant checked a corrupt player, the moderator informs the players.'},
			{'name': 'Farmer (1)', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': 'May be a simple villager with no advanced ability. May be a "special farmer" if they are in play (Mod will explain further when the game starts!)'},
			{'name': 'Farmer (2)', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': 'May be a simple villager with no advanced ability. May be a "special farmer" if they are in play (Mod will explain further when the game starts!)'},
			{'name': 'Hermit', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': 'Protected from ALL Shadow creatures (Wolves, Vampire). If attacked by Shadows, the attacker is informed that the attack will not happen.'},
			{'name': 'Priest', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': 'During the first night, it detects the Sinner and discovers if the Seducer is in play'},
			{'name': 'Sinner', 'mystic': 0, 'corrupt': 1, 'faction':'Village', 
			 'description': "During the first night, the Priest learns the Sinner's identity (but not the other way around)."},
			{'name': 'Monk', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': 'During the first night, discovers TWO or more roles that are NOT played.'},
			{'name': 'Jester', 'mystic': 0, 'corrupt': 0, 'faction':'Jester', 
			 'description': 'If burned at the stake, the FOLLOWING day the stake will be cancelled (no matter votes and other powers). Wins if burned at the stake.'},
			{'name': 'Madman', 'mystic': 0, 'corrupt': 0, 'faction':'Madman', 
			 'description': "If killed by Wolves, the FOLLOWING night the Wolves' attack is cancelled. Wins if killed by Wolves."},
		];

  two = [
			{'name': 'Guard (1)', 'mystic': 0, 'corrupt': 0, 'faction':'Village',
			 'description':'During the first night, it recognises all other Guards (including a Corrupt Guard), and is informed how many Criminals are in play'},
  			{'name': 'Guard (2)', 'mystic': 0, 'corrupt': 0, 'faction':'Village',
			 'description':'During the first night, it recognises all other Guards (including a Corrupt Guard), and is informed how many Criminals are in play'},
			{'name': 'Lawyer', 'mystic': 0, 'corrupt': 0, 'faction':'City',
			 'description':"Can always vote at the Ballot. During ACCUSATIONS can SIGNAL another player. City or Criminals: target's votes are zeroed. Otherwise: target forced in Ballot."},
			{'name': 'Mayor', 'mystic': 0, 'corrupt': 0, 'faction':'City',
			 'description':'Can always vote at the Ballot. During ballot he can SIGNAL a player, casting additional votes equal to City players + 1'},
			{'name': 'Merchant', 'mystic': 0, 'corrupt': 0, 'faction':'City',
			 'description':'Can always vote at the Ballot. Can vote as many players as he pleases. Receives one less vote for EVERY OTHER City role alive.'},
			{'name': 'Preacher', 'mystic': 0, 'corrupt': 0, 'faction':'City',
			 'description':"Can always vote at the Ballot. If ANOTHER City player is sentenced to burn, the Stake is cancelled. If not in the Ballot, can SIGNAL one or more players; if any of them is sentenced to burn, the Stake is cancelled."},
			{'name': 'Seducer', 'mystic': 0, 'corrupt': 1, 'faction':'City/Village',
			 'description':'Can always vote at the Ballot. During EVERY vote, the number of votes it receives are halved, rounding up. The Priest is aware if the role is in play, not its identity.'},

			{'name': 'Assassin', 'mystic': 0, 'corrupt': 1, 'faction':'Criminals', 
			 'description': "During the first night, it recognises all other Criminals. Once per game, wakes in any mystic's turn: if the mystic is alive, the mystic dies; otherwise, kills a player at will."},
			{'name': 'Corrupt Guard', 'mystic': 0, 'corrupt': 1, 'faction':'Criminals', 
			 'description': "During the first night, it recognises all other Guards; it also recognises all other Criminals. Not counted as Guard for the victory conditions."},
			{'name': 'Guild Master', 'mystic': 0, 'corrupt': 0, 'faction':'Criminals', 
			 'description': "During the first night, it recognises all other Criminals. Once per game, wakes in any mystic's turn; if the mystic is missing, select a player. Guard or Wolf: Guild Master dies. City or Village: target recognises Guild Master and its faction becomes 🔪 Criminals. Otherwise, nothing happens."},
			{'name': 'Thief', 'mystic': 0, 'corrupt': 0, 'faction':'Criminals', 
			 'description': "During the first night, it recognises all other Criminals. Once per game, wakes in any mystic's turn: Thief becomes protected from FIRST Shadow attack it receives."},
			{'name': 'Spy', 'mystic': 0, 'corrupt': 0, 'faction':'Criminals', 
			 'description': "During the first night, it recognises all other Criminals. CAN keep eyes open during ALL ACCUSATIONS votes, in which case VOTES FOR ITSELF."},

			{'name': 'Juliet', 'mystic': 0, 'corrupt': 0, 'faction':'Lovers', 
			 'description': "During the first night, selects Romeo, who recognises her. Romeo gains protection from Shadow; its faction becomes Lover. If one dies, the other dies during the night."},
			{'name': 'Guardian Angel', 'mystic': 0, 'corrupt': 0, 'faction':'Lovers', 
			 'description': "During the first night, selects the Guarded. If the Guarded goes to Ballot or is killed during the night, the Guardian Angel is informed and takes its place."},
			{'name': 'Vampire', 'mystic': 0, 'corrupt': 1, 'faction':'Vampire', 
			 'description': "Once every night from the second, it can select a target. Mystic: nothing happens. Wolves or Vampire Hunter: Vampire dies. Otherwise: target recognizes Vampire, loses all powers, becomes a Vampire's Minion (No powers, Vampire Faction, Corrupt"},
			{'name': 'Igor', 'mystic': 0, 'corrupt': 0, 'faction':'Works with Vampire', 
			 'description': "Opens eyes in Vampire's turn. Dies in Vampire's place DURING VAMPIRE'S TURN. Wins if Vampire wins."},
			{'name': 'Vampire Hunter', 'mystic': 0, 'corrupt': 0, 'faction':'Village', 
			 'description': "Is protected from Vampire's attack. During the first night, is informed if the Vampire is in town. If attacked by Vampire, Vampire Hunter is informed and Vampire dies."},
  		];


  three = [
			{'name': 'Pestilent', 'mystic': 0, 'corrupt': 0, 'faction': 'Village',
			 'description': "Is Infected. Every night, the two players next to the Pestilent, and everyone that chooses it, become Infected, except Undead and the Healer. Every morning, if half of the players, rounded down, are Infected, all players except Undead are eliminated. Infected Werewolves' attacks always fail. Healer and Undead are never Infected."},
			{'name': 'Undertaker', 'mystic': 0, 'corrupt': 0, 'faction': 'Village',
			 'description': "During the first night learns if the Necromancer is in play, and can open its eyes during Necromancer’s first turn. If it does, its Faction becomes Necromancer. Otherwise, every morning, if any Cursed characters have been eliminated since the previous day, the Moderator informs the village how many they were"},
			{'name': 'Poacher', 'mystic': 0, 'corrupt': 0, 'faction': 'Village',
			 'description': "During the first night learns the number of Werewolves in play, and if the Lone Wolf is in play. During Werewolves' turn, may show its Role card: if only one Werewolf is in play, it can't attack."},			 
			{'name': 'Vagrant', 'mystic': 0, 'corrupt': 0, 'faction': 'No faction',
			 'description': "In the morning, if six or less players are alive, the Vagrant is eliminated at the end of the coming night. Wins if eliminated this way, or alive at the end of the game."},
			{'name': 'Inquisitor', 'mystic': 0, 'corrupt': 0, 'faction': 'Inquisition',
			 'description': "During the first night locates the Executioner and the Templar, and learns the number of Mystics in play. If chosen by a Mystic, identifies it. Can Signal a player during Accusations: if a Mystic, target will be Accused regardless of votes received."},
			{'name': 'Executioner', 'mystic': 0, 'corrupt': 1, 'faction': 'Inquisition',
			 'description': "During the first night is located by the Inquisitor. If not Accused, can Signal a player during Ballot: if Mystic or Shadow Creature, all other Accused's votes are zeroed at the end of the Voting."},
			{'name': 'Templar', 'mystic': 0, 'corrupt': 1, 'faction': 'Inquisition',
			 'description': "During the first night is located by the Inquisitor. The morning after the Inquisitor has been eliminated, the Moderator tells the village that if any Mystic is still in play, after a number of days equal to the number of Mystics alive, all players will be eliminated. The countdown will not be interrupted even if the Templar dies."},
			{'name': 'Hag', 'mystic': 1, 'corrupt': 1, 'faction': 'No faction',
			 'description': "During the first night is located by all Shadow creatures.If chosen by a Mystic, after the response: the Mystic is Cursed while the Hag lives, causing the Mystic to always receive negative responses and voiding the protection it casts. Wins with any Shadow victory."},
			{'name': 'Outcast Wolf', 'mystic': 0, 'corrupt': 1, 'faction': 'Wolf Pack',
			 'description': "During the first night it locates the Defector and the Hag, and identifies all of the Wolf Pack. From the second night onward, can choose any player. If the strongest Werewolf does it, the target is killed. Protected from Alpha Wolf. Loses if the Alpha Wolf remains the strongest Werewolf in play"},
			{'name': 'Lone Wolf', 'mystic': 0, 'corrupt': 1, 'faction': 'Lone Wolf',
			 'description': "During the first night it locates the Defector, the Hag and all of the Wolf Pack. Protected from Werewolves. If there are no members of the Wolf Pack in play, opens its eyes during Werewolves' turn; can choose a player, target is killed."},
			{'name': 'Necromancer', 'mystic': 1, 'corrupt': 1, 'faction': 'Necromancer',
			 'description': "During the first night it locates the Hag, identifies the Undertaker; chooses two unprotected players: they are Cursed while the Necromancer is in play. If two or more Cursed players have been eliminated since the beginning of the game, on the morning the Moderator tells the village. If, on the following morning, the Necromancer is still in play, all players without Necromancer Faction are eliminated."},
			{'name': 'Nosferatu', 'mystic': 0, 'corrupt': 1, 'faction': 'Nosferatu',
			 'description': "Is Undead. During the first night identifies Igor and locates the Hag. From the second night onward, locates players killed that night, can choose one and resurrect it. If it’s a Vampire Hunter or Werewolf, Nosferatu is killed. For a Mystic, nothing happens. For the Possessed, becomes it instead. Otherwise, target identifies the Nosferatu, loses all powers and becomes Undead Progeny: Undead, Corrupt, Nosferatu Faction"},
			{'name': 'Possessed', 'mystic': 0, 'corrupt': 1, 'faction': 'Possessed',
			 'description': "During the first night locates the Hag and identifies the Sinner. Remains in play until someone else becomes Possessed. If Burned at the stake, loses all powers. If dead, attacks a player, who (unless Protected) identifies it: target becomes the new Possessed."},
			 ];

    spirits = [
			{'name': 'Rest In Peace (1)', 'mystic': 0, 'corrupt': 0, 'faction': 'No faction',
			 'description': "Player is eliminated from play"},
			{'name': 'Rest In Peace (2)', 'mystic': 0, 'corrupt': 0, 'faction': 'No faction',
			 'description': "Player is eliminated from play"},
			{'name': 'Rest In Peace (3)', 'mystic': 0, 'corrupt': 0, 'faction': 'No faction',
			 'description': "Player is eliminated from play"},
			{'name': 'Presence', 'mystic': 0, 'corrupt': 0, 'faction': 'No faction',
			 'description': "Is a Spirit. During every Voting, can vote multiple players. If it was Corrupt, wins with any Shadow victory. Otherwise, wins with any Human victory."},
  			{'name': 'Ghost', 'mystic': 0, 'corrupt': 0, 'faction': 'No faction',
			 'description': "Is a Spirit. Can Signal a player during Accusations: target is Accused regardless of votes received. If the Ghost was Burned at the stake or killed by the Assassin, wins with any Shadow victory. Otherwise, wins with any Human victory."},
  			{'name': 'Spectre', 'mystic': 0, 'corrupt': 0, 'faction': 'No faction',
			 'description': "Is a Spirit. During every Voting, can Signal a player: that player receives one extra vote for every Spirit in play, plus one. Wins with any Shadow victory. If the Medium is in play, the Spectre can not vote nor Signal, but the Medium is Cursed while the Spectre is in play."},
  		

    ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  goToDescription(role) {
  	this.navCtrl.push(DescriptionPage, {role: role});
  }

}
