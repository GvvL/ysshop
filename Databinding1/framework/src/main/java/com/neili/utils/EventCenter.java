package com.neili.utils;

import com.neili.utils.eventlife.DemoSimpleEventHandler;
import com.neili.utils.eventlife.LifeCycleComponentManager;

import de.greenrobot.event.EventBus;

/**
 * Created by Administrator on 2016/11/22.
 */
public class EventCenter {

    private static final EventBus instance = new EventBus();

    private EventCenter() {
    }

    public static DemoSimpleEventHandler bindContainerAndHandler(Object container, DemoSimpleEventHandler handler) {
        LifeCycleComponentManager.tryAddComponentToContainer(handler, container);
        return handler;
    }

    public static final EventBus getInstance() {
        return instance;
    }


}

