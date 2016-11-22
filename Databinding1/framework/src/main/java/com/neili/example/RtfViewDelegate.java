package com.neili.example;

import android.view.View;
import android.widget.ListView;

import com.neili.framework.R;
import com.neili.framework.ViewDelegate;
import com.neili.ui.loadmore.LoadMoreListViewContainer;

import in.srain.cube.views.ptr.PtrDefaultHandler;
import in.srain.cube.views.ptr.PtrFrameLayout;
import in.srain.cube.views.ptr.PtrHandler;

/**
 * Created by Administrator on 2016/11/22.
 */
public class RtfViewDelegate extends ViewDelegate {
    PtrFrameLayout ptrFrame;
    ListView mListview;
    LoadMoreListViewContainer loadmoreFrame;
    @Override
    public int getRootLayoutId() {
        return R.layout.act_rtf;
    }

    @Override
    public void initWidget() {
        super.initWidget();
        ptrFrame=get(R.id.ptrframe);
        mListview=get(R.id.listview);
        loadmoreFrame=get(R.id.loadmore);

        ptrFrame.setResistance(1.7f);
        ptrFrame.setRatioOfHeaderHeightToRefresh(1.2f);
        ptrFrame.setDurationToClose(200);
        ptrFrame.setDurationToCloseHeader(1000);
// default is false
        ptrFrame.setPullToRefresh(false);
// default is true
        ptrFrame.setKeepHeaderWhenRefresh(true);
    }
}
