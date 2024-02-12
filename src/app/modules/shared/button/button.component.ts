import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

const classZises = {
  xsm: 'px-3 py-2 text-xs',
  sm: 'px-3 py-2 text-sm',
  base: 'text-sm px-5 py-2.5',
  lg: 'px-5 py-3 text-base',
  xlg: 'text-base px-6 py-3.5',
};

const spanClass =
  'relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0';

const classesButton = {
  default:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
  alternative:
    'font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
  light:
    'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  green:
    'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  red: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellow:
    'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900',
  purple:
    'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
  defaultPills:
    'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  alternativePills:
    ' font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  darkPills:
    'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
  greenPills:
    'text-white bg-green-700 hover:bg-greeen-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full  text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900',
  lightPills:
    'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  font-medium rounded-full  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  redPills:
    'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full  text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellowPills:
    'text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full  text-center dark:focus:ring-yellow-900',
  purplePills:
    'text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full  text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
  defaultGradMono:
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-center ',
  greenGradMono:
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg  text-center ',
  cyanGradMono:
    'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  text-center ',
  tealGradMono:
    'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg  text-center ',
  limeGradMono:
    'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg  text-center ',
  redGradMono:
    'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  text-center ',
  pinkGradMono:
    'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg  text-center ',
  purpleGradMono:
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  text-center ',
  defaultColoredShadows:
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg  text-center ',
  greenColoredShadows:
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  text-center ',
  cyanColoredShadows:
    'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  text-center ',
  tealColoredShadows:
    'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg  text-center ',
  limeColoredShadows:
    'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg  text-center ',
  redColoredShadows:
    'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg  text-center ',
  pinkColoredShadows:
    'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg  text-center ',
  purpleColoredShadows:
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg  text-center ',
  purpleToBlueGradientDuotone:
    'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-center ',
  cyanToBlueGradientDuotone:
    'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  text-center ',
  greenToBlueGradientDuotone:
    'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  text-center ',
  purpleToPinkGradientDuotone:
    'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  text-center ',
  pinkToOrageGradientDuotone:
    'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  text-center ',
  tealToLimeGradientDuotone:
    'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg  text-center ',
  redToYellowGradientDuotone:
    'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg  text-center ',
  purpleToBlueGradientOutline:
    'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
  cyanToBlueGradientOutline:
    'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800',
  greenToBlueGradientOutline:
    'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
  purpleToPinkGradientOutline:
    'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
  tealToLimeGradientOutline:
    'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800',
  redToYellowGradientOutline:
    'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
  pinkToOrangeGradientOutline:
    'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
  cifradoGreen: 'text-white bg-[#00a787] font-semibold text-base text-[1.06rem] leading-none capitalize px-10 py-[15px] rounded-sm border-solid border-0 border-[#00a787]'
};

type Size = 'xsm' | 'sm' | 'base' | 'lg' | 'xlg';
type TypeButton = 'button' | 'menu' | 'reset' | 'submit'

type StyleButton = keyof typeof classesButton;

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter<string>();
  @Input() styleButton: StyleButton = 'default';
  @Input() type: TypeButton = 'button';
  @Input() title: string = '';
  @Input() set isDisable(d: boolean) {
    this.setDisable(d);
  }
  @Input() set size(s: Size) {
    this.changeSize(s);
  }
  @Input() set isLoading(load: boolean) {
    this.load = load;
  }

  load: boolean = false;
  active: boolean = true;
  classZise: string = classZises.base;
  classText: string = '';
  classButton: string = classesButton.default;
  classDisable: string = '';

  ngOnInit(): void {
    if (this.styleButton) {
      this.classText = '';
      this.classButton = classesButton[this.styleButton]
      const classesOutline = [
        'pinkToOrangeGradientOutline',
        'redToYellowGradientOutline',
        'purpleToBlueGradientOutline',
        'cyanToBlueGradientOutline',
        'greenToBlueGradientOutline',
        'purpleToPinkGradientOutline',
        'tealToLimeGradientOutline',
      ];
      if (classesOutline.includes(this.styleButton)) {
        this.classZise = ''
        this.classText = `${classZises.base} ${spanClass}`;
      }
    }
  }

  emitClick(_: Event): void {
    if (this.load) { return }
    if (this.active) {
      this.buttonClick.emit('clicked');
    }
  }

  setDisable(disable: boolean): void {
    if (disable) {
      this.active = false
      this.classDisable = '!cursor-not-allowed !opacity-70';
    } else {
      this.active = true
      this.classDisable = '';
    }
  }

  changeSize(s: Size): void {
    if (this.styleButton.includes('Outline')) {
      this.classZise = '';
      this.classText = `${spanClass} ${classZises[s]}`;
    } else {
      this.classZise = classZises[s];
    }
  }
}
