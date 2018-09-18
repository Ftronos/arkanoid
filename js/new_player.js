"use strict";

/**
 * Объект игрока (каретки)
 * @property x Координата по x
 * @property y Координата по y
 * @property width Ширина каретки
 * @property height Высота каретки
 * @property color Цвает каретки
 * @property speed Скорость каретки
 * @property dx Перемещение по горизонтали
 */
const player = {
    x: 50,
    y: null,
    width: 100,
    height: 10,
    color: 'yellow',
    speed: 2,
    dx: 0,

    /**
     * Отрисовывает каретку
     */
    draw() {
        drawRect(this.x, this.y, this.width, this.height, this.color);
    },

    /**
     * Передвигает каретку
     */
    move(leap, distance) {
        if (leap) {
            //
            this.moveLeap(distance);
        } else {
            // Если нажата клавиша влево
            if (isKeyDown('LEFT')) {
                // Проверяем можем ли мы двигаться влево
                if (this.x > 0) {
                    // Уменьшаем значение координаты каретки на число равное скорости каретки
                    this.moveLeft(distance);
                } else {
                    this.x = 0;
                }
                // Устанавливаем перемещение по горизонтали как отрицательное
                this.dx = -1;
            }
            // Если нажата клавиша влево
            else if (isKeyDown('RIGHT')) {
                // Проверяем можем ли мы двигаться вправо
                if (this.x < width - this.width) {
                    // Увеличиваем значение координаты каретки на число равное скорости каретки
                    this.moveRight(distance);
                } else {
                    this.x = width - this.width;
                }
                // Устанавливаем перемещение по горизонтали как положительное
                this.dx = 1;
            } else {
                // Устанавливаем что картка не перемещается
                this.dx = 0;
            }
        }
    },

    /**
     * Передвигает каретку на заданное количество процентов влево
     * @param distance количество процентов на которое надо передвинуть каретку
     */
    moveLeft(distance) {
        this.x -= distance * 0.01 * width;
    },

    /**
     * Передвигает каретку на заданное количество процентов вправо
     * @param distance количество процентов на которое надо передвинуть каретку
     */
    moveRight(distance) {
        this.x += distance* 0.01 * width;
    },

    /**
     * Передвигает каретку на заданное количество процентов скачком
     * @param distance количество процентов на которое надо передвинуть каретку
     */
    moveLeap(distance) {
        this.x = distance * 0.01 * width;
    },

    /**
     * Перезаписывает свойства объекта в зависимости от переданных параметров
     * @param x Координата по x
     * @param y Координата по y
     * @param w Цирина
     * @param color Цвет
     */
    init(x, y, w, color) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.color = color;
    },
};