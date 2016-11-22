package com.neili.ui.loadmore;

/**
 * Created by Administrator on 2016/11/22.
 */
public interface LoadMoreUIHandler {
    public void onLoading(LoadMoreContainer container);

    public void onLoadFinish(LoadMoreContainer container, boolean empty, boolean hasMore);

    public void onWaitToLoadMore(LoadMoreContainer container);

    public void onLoadError(LoadMoreContainer container, int errorCode, String errorMessage);
}
