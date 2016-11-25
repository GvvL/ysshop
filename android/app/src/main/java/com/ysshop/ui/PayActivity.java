package com.ysshop.ui;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentActivity;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.facebook.react.bridge.ReactMethod;
import com.pingplusplus.libone.PaymentHandler;
import com.pingplusplus.libone.PingppOne;
import com.ysshop.R;

import org.json.JSONException;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by giw on 16/11/15.
 */
public class PayActivity extends FragmentActivity{
    private static final String SERVER_CHARGE_URL="http://218.244.151.190/demo/charge";
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_pay);
        findViewById(R.id.button2).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                PayActivity.this.toPay();
            }
        });
    }

    public void toPay(){

        PingppOne.enableChannels(new String[]{"wx", "alipay", "upacp"});
        PingppOne.CONTENT_TYPE = "application/json";//数据提交格式

        PingppOne.showPaymentChannels(this.getSupportFragmentManager(), this.createChargeData(), null, SERVER_CHARGE_URL, new PaymentHandler() {
            /**
             * 返回支付结果
             * @param data
             */
            @Override
            public void handlePaymentResult(Intent data) {
                if (data != null) {
                    /**
                     * code：支付结果码  -2:服务端错误、 -1：失败、 0：取消、1：成功
                     * error_msg：支付结果信息
                     */
                    int code = data.getExtras().getInt("code");
                    String errorMsg = data.getExtras().getString("error_msg");

                }
            }
        });
    }

    /**
     * 构建charge数据结构
     */
    public String createChargeData(){
        String orderNo = new SimpleDateFormat("yyyyMMddhhmmss")
                .format(new Date());

        // 构建账单json对象
        JSONObject bill = new JSONObject();


        try {
            bill.put("order_no", orderNo);
            bill.put("amount", 1000);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return bill.toString();
    }
}
