/**
 * Created by Oshevchuk on 25.09.2017.
 * http://oshevchuk2016.16mb.com/
 */
import {Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit, OnInit {
    @ViewChild('canvasEl') canvas:ElementRef;

    circles:Circle[] = [];
    tx = 20;

    constructor() {

    }

    ngAfterViewInit():void {
        console.log(this.canvas);

        var self = this;
        setInterval(function () {
            // self.tx++;
            // self.circles[1].cx=self.tx;
        }, 100)
    }

    ngOnInit():void {
        let clientHeight = this.canvas.nativeElement.clientHeight || window.innerHeight;
        let clientWidth = this.canvas.nativeElement.clientWidth || window.innerWidth;

        // console.log(this.canvas);
        // console.log(this.canvas.nativeElement.clientHeight, this.canvas.nativeElement.clientWidth);

        // this.circles.push(new Circle(71, 1, 30));
        // this.circles.push(new Circle(50, 500, 20));

        for (var i = 0; i < 30; ++i) {
            let opacity = ran(1, 9) / 10;
            this.circles.push(new Circle(ran(0, clientWidth), ran(0, clientHeight), ran(1, 30), opacity));
        }

        let self = this;

        function move() {
            for (var i = 0; i < self.circles.length; i++) {
                if (!self.circles[i].time) {
                    self.circles[i].time = ran(30, 100);
                    self.circles[i].deg = ran(-179, 180);
                    self.circles[i].vel = ran(1, 5);
                    self.circles[i].curve = ran(0, 1);
                    self.circles[i].fade = ran(0, 1);
                    self.circles[i].grow = ran(-2, 2);
                }

                let nowX = self.circles[i].cx;
                let nowY = self.circles[i].cy;

                let dx = self.circles[i].vel * Math.cos(self.circles[i].deg * Math.PI / 180);
                let dy = self.circles[i].vel * Math.sin(self.circles[i].deg * Math.PI / 180);
                nowX += dx;
                nowY += dy;

                if (nowX < 0) nowX = clientWidth + nowX;
                else nowX = nowX % clientWidth;

                if (nowY < 0) nowY = clientHeight + nowY;
                else nowY = nowY % clientHeight;

                self.circles[i].setPosition(nowX, nowY);

                let rad = self.circles[i].radius;
                if (self.circles[i].grow > 0) self.circles[i].radius = Math.min(30, rad + 0.1);
                else self.circles[i].radius = Math.max(10, rad - 0.1);

                if (self.circles[i].curve > 0) self.circles[i].deg = self.circles[i].deg + 2;
                else self.circles[i].deg = self.circles[i].deg - 2;

                let opa = self.circles[i].fill;
                if (self.circles[i].fade > 0) {
                    self.circles[i].fill = Math.max(0.3, opa - 0.01);
                } else {
                    self.circles[i].fill = Math.min(1, opa + 0.01);
                }

                self.circles[i].time=self.circles[i].time-1;

                if(self.circles[i].vel <1) self.circles[i].time=0;
                else self.circles[i].vel=self.circles[i].vel-0.05;
            }

            requestAnimationFrame(move);
        }

        move();


        function ran(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

}

export class Circle {
    public cx:number;
    public cy:number;
    public time:number;
    public deg:number;
    public vel:number;
    public curve;
    public fade;
    public grow;
    public radius;
    public fill;

    constructor(cx?, cy?, radius?, fill?) {
        this.cx = cx ? cx : 0;
        this.cy = cy ? cy : 0;
        this.radius = radius ? radius : 0;
        this.fill = fill ? fill : 1;
    }

    public setPosition(x, y) {
        this.cx = x;
        this.cy = y;
    }
}