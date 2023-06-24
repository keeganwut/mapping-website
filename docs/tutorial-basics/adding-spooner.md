---
sidebar_position: 3
---

# Adding Spooner

This section will explain how to add spooner to your new locally hosted server.

## Unzipping spooner

Navigate to your resources directory it should look like ```Desktop\<NAME_YOU_CHOSE>\server-files\server-data\resources```

Create a new folder called ```[additional]``` and open it.

Open the spooner zip file we downloaded earlier.

Drag and drop ```spooner-master``` into the ```[additional]``` folder.

Rename the folder ```spooner-master``` to just ```spooner```.

## Unzipping uiprompt

Open the uiprompt zip file we downloaded earlier.

Drag and drop ```redm-uiprompt-master``` into the ```[additional]``` folder.

Rename the folder ```redm-uiprompt-master``` to just ```uiprompt```.

:::tip TIP

The reason the spooner folder has '-master' attached to the name is because it is the branch that you downloaded from.

Which is unnecessary and sometimes causes issues with some resources, so make sure to always remove the branch name.

Also uiprompt has 'redm-' attached to itself because the creator wanted to categorize their Github.

:::

## Configuring the Server Config

Navigate back to your resources directory which should look like ```Desktop\<NAME_YOU_CHOSE>\server-files\server-data\resources```

Click on the ```server.cfg``` file and then right click on it.

Click **Open With** and choose the text editor of your choice (Notepad works just fine for this case).

In the text editor scroll down until you see:
```cfg
## These resources will start by default.
ensure mapmanager
ensure chat
ensure spawnmanager
ensure sessionmanager-rdr3
ensure redm-map-one
ensure hardcap
```

Add another line at the bottom and type ```ensure [additional]```

Add a couple more lines below the above then type:
```cfg
exec @spooner/permissions.cfg
```

Your cfg should now look like this:
```cfg
## These resources will start by default.
ensure mapmanager
ensure chat
ensure spawnmanager
ensure sessionmanager-rdr3
ensure redm-map-one
ensure hardcap
// highlight-next-line
ensure [additional]

// highlight-next-line
exec @spooner/permissions.cfg
```

:::tip TIP

I recommend you edit the ```sv_maxclients``` line as well and set it to 10 instead of 48.

This gives you a free support tier from the CFX Patreon page as long as you keep it below 10.

:::