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
    width: null,
    height: 10,
    color: 'yellow',
    speed: 2,
    dx: 0,

    /**
     * Отрисовывает каретку
     */
    draw() {
        drawPlayerRect(this.x, this.y, this.width, this.height, this.color);
    },

    /**
     * Проверяет возможно ли перемещение каретки
     */
    canMove(direction, distance) {
        // Проверяем где окажется каретка в следующий момент времени
        let nextPosition = this.x + direction * distance * 0.01 * width;
        // Если она окажется вне игровой области то шаг не может быть сделан
        if (nextPosition + this.width > width || nextPosition < 0) {
            return false;
        }

        return true;
    },

    /**
     * Передвигает каретку влево
     */
    moveLeft(distance) {
        // Если каретка может сделать передвижение, то передвигаем
        if (this.canMove(-1, distance)) {
            this.x += distance * 0.01 * width * -1;
            return;
        }

        this.x = 0;
    },

    /**
     * Передвигает каретку вправо
     */
    moveRight(distance) {
        // Если каретка может сделать передвижение, то передвигаем
        if (this.canMove(1, distance)) {
            this.x += distance * 0.01 * width * 1;
            return;
        }

        this.x = width - this.width;
    },

    /**
     * Передвигает каретку на заданное количество процентов скачком
     * @param distance количество процентов на которое надо передвинуть каретку
     */
    moveLeap(distance) {
        let nextPosition = distance * 0.01 * width;
        if (nextPosition + this.width > width) {
            this.x = width - this.width;
            return;
        }
        this.x = nextPosition;
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