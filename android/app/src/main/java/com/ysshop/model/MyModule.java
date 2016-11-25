package com.ysshop.model;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.pingplusplus.libone.PaymentHandler;
import com.pingplusplus.libone.PingppOne;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by giw on 16/11/15.
 */
public class MyModule extends ReactContextBaseJavaModule{
    private static final String SERVER_CHARGE_URL="http://218.244.151.190/demo/charge";

    public MyModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyModule";
    }
    /**
     * js->原声
     */
    @ReactMethod
    public void startActivityFromJs(String name,String params){
        Activity currActivity=getCurrentActivity();
        try {
            if(null!=currActivity){
                Class toAct=Class.forName(name);
                Intent intent=new Intent(currActivity,toAct);
                intent.putExtra("params",params);
                currActivity.startActivity(intent);
            }
        }catch (Exception e){
            Toast.makeText(currActivity,name+"打开失败",Toast.LENGTH_SHORT).show();
        }

    }
    /**
     * js启动支付
     */
    @ReactMethod
    public void toPay(){
        Activity currActivity=getCurrentActivity();
        if(null==currActivity){
            return;
        }
        PingppOne.enableChannels(new String[]{"wx", "alipay", "upacp"});
        PingppOne.CONTENT_TYPE = "application/json";//数据提交格式

        PingppOne.showPaymentChannels(currActivity.getFragmentManager(), this.createChargeData(), null, SERVER_CHARGE_URL, new PaymentHandler() {
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
