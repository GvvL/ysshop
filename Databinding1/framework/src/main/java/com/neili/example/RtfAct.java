package com.neili.example;

import android.content.Context;
import android.os.SystemClock;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.ListView;

import com.neili.framework.ActP;
import com.neili.ui.loadmore.LoadMoreContainer;
import com.neili.ui.loadmore.LoadMoreHandler;
import com.neili.utils.EventCenter;
import com.neili.utils.ImgUtil;
import com.neili.utils.eventlife.DemoSimpleEventHandler;
import com.neili.utils.eventlife.IComponentContainer;
import com.neili.utils.eventlife.LifeCycleComponent;
import com.neili.utils.eventlife.LifeCycleComponentManager;

import java.util.ArrayList;
import java.util.List;

import in.srain.cube.views.ptr.PtrDefaultHandler;
import in.srain.cube.views.ptr.PtrFrameLayout;
import in.srain.cube.views.ptr.PtrHandler;

/**
 * Created by Administrator on 2016/11/22.
 */
public class RtfAct extends ActP<RtfViewDelegate> {
    RtfAdapter adapter;

    @Override
    protected void preliminary() {
        super.preliminary();

        adapter=new RtfAdapter(this);
        viewDelegate.mListview.setAdapter(adapter);


        viewDelegate.ptrFrame.setPtrHandler(new PtrHandler() {
            @Override
            public boolean checkCanDoRefresh(PtrFrameLayout frame, View content, View header) {
                return PtrDefaultHandler.checkContentCanBePulledDown(frame, viewDelegate.mListview, header);
            }

            @Override
            public void onRefreshBegin(final PtrFrameLayout frame) {
//                frame.postDelayed(new Runnable() {
//                    @Override
//                    public void run() {
                        EventCenter.getInstance().post(new MyEvent());
//
//                    }
//                }, 1800);
            }
        });


        viewDelegate.loadmoreFrame.useDefaultHeader();
        viewDelegate.loadmoreFrame.setAutoLoadMore(true);
        viewDelegate.loadmoreFrame.setLoadMoreHandler(new LoadMoreHandler() {
            @Override
            public void onLoadMore(final LoadMoreContainer loadMoreContainer) {
                adapter.add(2);
                adapter.notifyDataSetChanged();

                loadMoreContainer.loadMoreFinish(false, adapter.getCount() < 20);
            }
        });

        EventCenter.bindContainerAndHandler(this,new DemoSimpleEventHandler()
        {
            public void onEvent(MyEvent event){
                adapter.add(5);
                viewDelegate.loadmoreFrame.loadMoreFinish(false, true);
                viewDelegate.ptrFrame.refreshComplete();
            }

        }).tryToRegisterIfNot();
    }




    class RtfAdapter extends BaseAdapter {
        private Context mContext;
        private List<Integer> integers=new ArrayList<>();
        public RtfAdapter(Context c){
            this.mContext=c;
            add(5);
        }

        public void add(int count){
            int num=integers.size();
            for(int i=0;i<count;i++){
                integers.add(num+i);
            }
        }


        @Override
        public int getCount() {
            return integers.size();
        }

        @Override
        public Object getItem(int position) {
            return null;
        }

        @Override
        public long getItemId(int position) {
            return 0;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            ImageView imageView=new ImageView(mContext);
            ListView.LayoutParams lp=new ListView.LayoutParams(600,400);
            imageView.setLayoutParams(lp);
            ImgUtil.into("http://easyread.ph.126.net/tfuX2Io4XL0OwmG6itI5kA==/7916756398872722482.jpg",mContext,imageView);
            return imageView;
        }
    }

    class MyEvent{

    }

}
