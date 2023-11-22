---
layout: post
title:  "Launch the baby"
summary: "Game programmer"
date:   2023-09-05 9:00:00
preview: /assets/LBT.png
---

![Picture 1](/assets/LBT-fullsize.png)

Game programming and code optimization in general, using Unity as game engine

* Implemented an event-based input system using Unity's new input system
* I improved the performance of some parts of the game by creating some pools of objects, which drastically improved part of the performance bottleneck that existed
* Improved some gameplay systems (obstacles and stuff like that)
* Implemented movement through the game menus
* System of objectives by level
* Refactoring of some already implemented parts of some systems
* Steamworks configuration on the project with achievements and leaderboards

---
### Technology
* Unity3D
* Rider

### Task management
* Trello

---

### CODE
<details>
<summary>Simple example of code using steamworks</summary>

```C#
public static void GiveAchievement(string achievementName)
{
	if (SteamManager.Initialized)
	{
		SteamUserStats.GetAchievement(achievementName, out var achievementCompleted);
		if (!achievementCompleted)
		{
			SteamUserStats.SetAchievement(achievementName);
			SteamUserStats.StoreStats();
		}
	}
}
```

</details>


### Game prints
![Picture 2](/assets/LTBprints/print1.png)
![Picture 3](/assets/LTBprints/print2.png)
![Picture 4](/assets/LTBprints/print3.png)