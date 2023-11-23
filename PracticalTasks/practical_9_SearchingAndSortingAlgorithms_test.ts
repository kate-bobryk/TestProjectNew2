Feature("Practical Task Number 9 - Searching and sorting algorithms");

Scenario("PZ9 @C091 Bubble sort", () => {
  function bubbleSort(A: number[]): number[] {
    const n: number = A.length;

    for (let i: number = 0; i < n - 1; i++) {
      for (let j: number = 0; j < n - 1 - i; j++) {
        if (A[j + 1] < A[j]) {
          const t: number = A[j + 1];
          A[j + 1] = A[j];
          A[j] = t;
        }
      }
    }

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = bubbleSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];

  //example 2:
  //(for a): проходит по всем элементам массива с индексами от 0 до предпоследнего (a идет вправо по массиву).
  //(for b) идет в обратном порядке от последнего элемента массива до текущего индекса внешнего цикла (b идет влево от последнего элемента к текущему).
  //если элемент справа больше элемента слева, то они меняются местами (внутри условия if).
  //проверяем, является ли текущий элемент массива (с индексом b) больше элемента слева от него (с индексом b - 1), если да, то мы производим обмен элементов.
  //если текущий элемент больше элемента слева, то мы создаем временную переменную и используем ее для обмена значениями между текущим и предыдущим элементами массива, мы переставляем их местами.
  //больший элемент (текущий) перемещается вправо, а меньший элемент (слева от текущего) перемещается влево.
  function sortNumbersDescending(numbers: number[]): number[] {
    //внешний цикл for (идем вправо по массиву):
    for (let a: number = 0; a < numbers.length - 1; a++) {
      //внутренний цикл for (идем влево, если нужно):
      for (let b: number = numbers.length - 1; b > a; b--) {
        if (numbers[b] > numbers[b - 1]) {
          //меняем местами, если нужно:
          const c: number = numbers[b];
          numbers[b] = numbers[b - 1];
          numbers[b - 1] = c;
        }
      }
    }
    return numbers;
  }

  const inputNumbers: number[] = [-100, 0.5, 5, 10, 46.7];
  const sortedResult: number[] = sortNumbersDescending(inputNumbers);
  console.log(sortedResult); //[ 46.7, 10, 5, 0.5, -100 ];
  const sortedResult2: number[] = sortNumbersDescending([77, 0.7, 7, 0, -17]);
  console.log(sortedResult2); //[ 77, 7, 0.7, 0, -17 ];

  //example D:
  function sortNumbers(...numbers: number[]): number[] {
    let a: number = numbers[0];
    const numLength: number = numbers.length;
    if (numLength > 1) {
      for (let i: number = 1; i < numLength; i++) {
        let b: number = numbers[i];
        if (b > a) {
          numbers[i - 1] = b;
          numbers[i] = a;
          for (let j: number = i - 1; j >= 0; j--) {
            const c: number = numbers[j];
            if (b > c) {
              numbers[j] = b;
              numbers[j + 1] = c;
            }
            b = numbers[j];
          }
        }
        a = numbers[i];
      }
    }
    return numbers;
  }
  console.log(sortNumbers(5, 2, 4, 7)); //[ 7, 5, 4, 2 ];
  console.log(sortNumbers(-4, 12, 5, 0)); //[ 12, 5, 0, -4 ];
  console.log(sortNumbers(5)); //[ 5 ];
  console.log(sortNumbers(0, 1, 2, 3, 4, 5)); //[ 5, 4, 3, 2, 1, 0 ];
});

Scenario("PZ9 @C092 Selection sort", () => {
  //проходит по массиву раз за разом, перемещая одно значение на правильную позицию,
  //выбирает наименьшее неотсортированное значение вместо наибольшего, упорядоченная часть массива расположена в начале.
  function selectionSort(A: number[]): number[] {
    const n: number = A.length;
    //внешний цикл: переменная min устанавливается в текущее значение i, текущий элемент является минимальным в оставшейся части массива.
    for (let i: number = 0; i < n - 1; i++) {
      let min: number = i;
      //второй цикл: сравниваются элементы массива (eсли элемент с индексом j меньше элемента с индексом min, то обновляется значение min).
      for (let j: number = i + 1; j < n; j++) {
        if (A[j] < A[min]) {
          min = j;
        }
      }
      //после завершения второго цикла переменная min содержит индекс минимального элемента в оставшейся части массива,
      //обмениваем местами текущий элемент с индексом i и минимальным элементом с индексом min.
      const t: number = A[min];
      A[min] = A[i];
      A[i] = t;
    }

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = selectionSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
});

Scenario("PZ9 @C093 Insertion sort", () => {
  //массив проходится слева направо: берём элемент и ищем, куда его можно вставить в левой части массива так, чтобы слева находилось меньшее число, а справа — большее, делаем так с каждым последующим элементом.

  //берём следующий элемент и проводим его влево сквозь массив до того момента, как он упрётся в меньший элемент, чем он сам:
  //шаг 1: первый эл-т сравниваем со вторым, меняем местами если нужно
  //шаг 2: третий эл-т сравниваем со вторым и меняем, дальше с первым
  //шаг 3: четвертый сравниваем с третьим, потом со вторым, потом с первым и т.д.
  function insertionSort(A: number[]): number[] {
    const n: number = A.length;
    //внешний цикл - "перебирает" элементы начиная со второго, слева направо, нужно сравнить все элементы.
    for (let i: number = 0; i < n; i++) {
      const v: number = A[i];
      let j: number = i - 1;
      //внутренний - "перебирает" элементы с индекса выбранного внешним, "движется" по массиву влево.
      //while цикл в котором мы сравниваем значение предыдущего элемента с текущим, если он больше, то меняем элементы местами.
      while (j >= 0 && A[j] > v) {
        A[j + 1] = A[j];
        j--;
      }

      A[j + 1] = v;
    }

    return A;
  }

  //example 2 (сортировка по убыванию):
  //поменяли условие внутреннего цикла, чтобы сравнивать элементы по убыванию.
  function insertionSortDescending(A: number[]): number[] {
    const n: number = A.length;

    for (let i: number = 0; i < n; i++) {
      const v: number = A[i];
      let j: number = i - 1;
      //j >= 0 проверяет, что мы не вышли за пределы массива влево
      //A[j] < v проверяет, что текущий элемент больше значения v (значение, которое мы взяли для сравнения и вставки)
      //когда оба условия выполняются, то выполняется цикл: A[j + 1] = A[j]
      //значение элемента A[j] сдвигается на одну позицию вправо, создавая место для вставки v
      //j-- - уменьшаем j, чтобы проверить предыдущий элемент
      //Цикл продолжается до тех пор, пока не найдется подходящая позиция для вставки v или не достигнут начало массива (когда j становится отрицательным).
      while (j >= 0 && A[j] < v) {
        A[j + 1] = A[j];
        j--;
      }

      A[j + 1] = v;
    }

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const firstSortedArray: number[] = insertionSort([...arrayNumbersForCheck]);
  console.log(firstSortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
  console.log(arrayNumbersForCheck); //[0, -10, 5, 4.2, -7.3,  12, 1.8, -17, 24];

  const secondSortedArray: number[] = insertionSortDescending([...arrayNumbersForCheck]);
  console.log(firstSortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
  console.log(secondSortedArray); //[24, 12, 5, 4.2, 1.8,  0, -7.3, -10, -17];
  console.log(arrayNumbersForCheck); //[0, -10, 5, 4.2, -7.3,  12, 1.8, -17, 24];
});

Scenario("PZ9 @C094 Shell sort", () => {
  //сравнении элементов, стоящих не только рядом, но и на определённом расстоянии друг от друга (равномерно выбираются с некоторой дельтой по индексу).
  //шаг 1: сортируем простыми вставками каждые n групп из х элементов:
  //применим алгоритм сортировки вставками к подмассиву, состоящему из каждого 5-го элемента, выглядеть он будет так: (а1, а6, а11)
  //сохраняем результат сортировки в основном массиве, с тем же интервалом между элементами, сдвигаемся на элемент вправо и сортируем подмассив (а2, а7), затем то же самое для (а3, а8), так до конца
  //шаг 2: возьмём подмассив из каждого 3-го элемента: (а1, а4, а7, а10), сохраняем результат сортировки в основном массиве
  //затем, уже привычным движением сдвигаемся на один элемент вправо, получаем подмассив:(а2, а5, а8, а11) и так до конца
  //шаг 3: в конце сортируем вставками все 10 элементов.
  //сложность алгоритма будет зависеть от того, какие интервалы выбрать между элементами для выделения подмассивов:
  function shellSort(A: number[]): number[] {
    const n: number = A.length;
    let i: number = Math.floor(n / 2);

    while (i > 0) {
      for (let j: number = 0; j < n; j++) {
        let k: number = j;
        const t: number = A[j];

        while (k >= i && A[k - i] > t) {
          A[k] = A[k - i];
          k -= i;
        }

        A[k] = t;
      }

      i = i === 2 ? 1 : Math.floor((i * 5) / 11);
    }

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24, 35];
  const sortedArray: number[] = shellSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24, 35];
});

Scenario("PZ9 @C095 Counting sort", () => {
  //считает, сколько раз встречается каждый элемент в массиве, потом заполняет исходный массив результатами этого подсчёта
  //нужен вспомогательный массив, где мы будем хранить результаты подсчёта.
  //шаг 1: создаём вспомогательный массив и на старте заполняем его нулями.
  //шаг 2: проходим по всему исходному массиву и увеличиваем на единицу значение вспомогательного массива под этим номером
  //например, если мы встретили число 5, то увеличиваем на единицу пятый элемент вспомогательного массива
  //шаг 3: после цикла во вспомогательном массиве у нас хранятся данные, сколько раз встречается каждый элемент.
  //шаг 4: проходим по вспомогательному массиву, если в очередной ячейке лежит что-то больше нуля, то отправляем в исходный массив столько же раз номер этой ячейки

  function simpleCountingSort(A: number[]): number[] {
    const n: number = A.length;
    const Count: number[] = [];
    const B: number[] = [];

    for (let i: number = 0; i < n; i++) {
      Count[i] = 0;
    }

    for (let i: number = 0; i < n - 1; i++) {
      for (let j: number = i + 1; j < n; j++) {
        if (A[i] < A[j]) {
          Count[j]++;
        } else {
          Count[i]++;
        }
      }
    }

    for (let i: number = 0; i < n; i++) {
      B[Count[i]] = A[i];
    }

    return B;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = simpleCountingSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
});

Scenario("PZ9 @C096 Comb sort", () => {
  //на первом шаге мы находим длину массива (например, 10 элементов) и делим её на 1,247 = (8);
  //проходим первый цикл пузырьковой сортировки, сравнивая сразу 1 и 8, 2 и 9, отправляем самые большие числа, если они есть в начале, в самый конец;
  //на втором шаге берём число (8) из предыдущего этапа и снова делим его на 1,247, получая число (6), снова проходим весь массив и сравниваем (так: 1 и 6, 2 и 7);
  //уменьшаем размер шага до тех пор, пока он не станет меньше единицы — к этому моменту массив будет полностью отсортирован.
  //расчёска лучше пузырьковой сортировки, потому что в ней намного меньше операций перестановки.
  function newGap(gap: number): number {
    gap /= 1.3;
    if (gap === 9 || gap === 10) gap = 11;
    if (gap < 1) return 1;
    return gap;
  }

  function combSort(A: number[]): number[] {
    const n: number = A.length;
    let gap: number = n;
    let swapped: boolean;

    do {
      swapped = false;
      gap = newGap(gap);

      for (let i: number = 0; i < n - gap; ++i) {
        if (A[i] > A[i + gap]) {
          swapped = true;
          const temp: number = A[i + gap];
          A[i + gap] = A[i];
          A[i] = temp;
        }
      }
    } while (gap > 1 || swapped);

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = combSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
});

Scenario("PZ9 @C097 Merge sort", () => {
  function merge(a: number[], low: number, mid: number, high: number): number[] {
    const b: number[] = new Array(high + 1 - low);
    let h: number = low;
    let i: number = 0;
    let j: number = mid + 1;

    while (h <= mid && j <= high) {
      if (a[h] <= a[j]) {
        b[i] = a[h];
        h++;
      } else {
        b[i] = a[j];
        j++;
      }
      i++;
    }

    if (h > mid) {
      for (let k: number = j; k <= high; k++) {
        b[i] = a[k];
        i++;
      }
    } else {
      for (let k: number = h; k <= mid; k++) {
        b[i] = a[k];
        i++;
      }
    }

    for (let k: number = 0; k <= high - low; k++) {
      a[k + low] = b[k];
    }

    return a;
  }

  function mergeSort(A: number[]): number[] {
    function merge_sort(a: number[], low: number, high: number): void {
      if (low < high) {
        const mid: number = Math.floor((low + high) / 2);
        merge_sort(a, low, mid);
        merge_sort(a, mid + 1, high);
        merge(a, low, mid, high);
      }
    }

    const n: number = A.length;
    merge_sort(A, 0, n - 1);

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = mergeSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];

  //example 2:
  //слияние массивов с одновременной сортировкой, на вход подаются уже отсортированные левая и правая части:
  function mergeEx2(left, right): number[] {
    // сюда будем складывать результат
    const arr: number[] = [];
    // пока в каждой части есть хотя бы один элемент — выполняем цикл
    while (left.length && right.length) {
      // смотрим на наименьший элемент из тех, что стоят в начале обоих массивов
      if (left[0] < right[0]) {
        // если слева был элемент меньше — забираем его оттуда и отправляем в массив с результатом
        arr.push(left.shift());
      } else {
        // в противном случае забираем элемент из правой части
        arr.push(right.shift());
      }
    }
    // выводим результат слияния отсортированных массивов
    console.log("result: " + arr);
    // возвращаем отсортированный массив и добавляем к нему в конец отсортированный остаток от какой-либо части, если её так и не обработали в цикле
    return [...arr, ...left, ...right];
  }
  // делим массивы пополам до тех пор, пока в них не останется элементов
  function mergeSortEx2(array): number[] {
    // находим середину:
    const half: number = array.length / 2;
    // если в нашем массиве и так меньше двух элементов — возвращаем его
    if (array.length < 2) {
      return array;
    }
    // делим массив на две части и левую отправляем в новый массив
    const left = array.splice(0, half);
    // выводим промежуточный результат
    console.log("left:" + left);
    console.log("right:" + array);
    // запускаем рекурсию и отдаём ей правую и левую части массива
    return mergeEx2(mergeSortEx2(left), mergeSortEx2(array));
  }

  const array: number[] = [3, 5, 1, 6, 9, 8, 2];
  console.log(mergeSortEx2(array)); //[1, 2, 3, 5, 6, 8, 9];
});

Scenario("PZ9 @C098 Heap sort", () => {
  //делит входные данные на отсортированную и несортированную области,
  //затем последовательно уменьшает несортированную область, извлекая самый большой элемент и перемещая его в сортированную область (используется бинарная куча)

  //шаг 1: строим max-heap из входных данных
  //шаг 2: самый большой элемент хранится в корне кучи, заменяем его на последний элемент кучи, а затем уменьшите ее размер на 1
  //шаг 3: преобразуем полученное дерево в max-heap с новым корнем.
  //шаг 4: повторяйте вышеуказанные шаги, пока размер кучи больше 1.

  function heapSort(A: number[]): number[] {
    if (A.length === 0) return [];

    let n: number = A.length;
    let i: number = Math.floor(n / 2);
    let j: number, k: number, t: number;

    while (true) {
      if (i > 0) t = A[--i];
      else {
        n--;

        if (n === 0) return A;

        t = A[n];
        A[n] = A[0];
      }

      j = i;
      k = j * 2 + 1;

      while (k < n) {
        if (k + 1 < n && A[k + 1] > A[k]) k++;

        if (A[k] > t) {
          A[j] = A[k];
          j = k;
          k = j * 2 + 1;
        } else {
          break;
        }
      }

      A[j] = t;
    }
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = heapSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
});

Scenario("PZ9 @C099 Quick sort", () => {
  //шаг 1: выбор опорного элемента из массива (им может быть любой элемент массива).
  //шаг 2: все остальные элементы массива сравниваются с опорным и те, которые меньше него, ставятся слева от него, а которые больше или равны — справа.
  //шаг 3: рекурсивное применение первых двух шагов к двум подмассивам слева и справа от опорного элемента, рекурсия не применяется к массиву, в котором только один или отсутствуют элементы.
  //для двух получившихся блоков массива (меньше опорного, и больше либо равны опорному) производится рекурсия — выделяется опорный элемент и всё идёт так же, пока в блоке не останется один элемент.

  //какие элементы выбрать как опорные?
  //a) первый элемент,
  //b) средний элемент — тот, который физически стоит посередине массива,
  //c) медианный элемент — элемент, значение которого находится посередине между всеми значениями в массиве.

  function quickSort(A: number[]): number[] {
    if (A.length === 0) return [];

    const a: number[] = [];
    const b: number[] = [];
    const p: number = A[0];

    for (let i: number = 1; i < A.length; i++) {
      if (A[i] < p) {
        a.push(A[i]);
      } else {
        b.push(A[i]);
      }
    }

    return quickSort(a).concat(p, quickSort(b));
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = quickSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
});

Scenario("PZ9 @C0910 Cocktail/Shaker sort", () => {
  //двунаправленная сортировка, в основе лежит равнение двух соседних элементов
  //шаг 1: идем вправо по массиву и сравниваем пары элементов, за один проход в конец массива “всплывает” максимальный элемент из диапазона,
  //шаг 2: идем влево и за следующий проход — в начало массива минимальный (сортировка по возрастанию)
  //отсортированные элементы больше не рассматривают и таким образом диапазон сужается с двух сторон.

  function cocktailSort(A: number[]): number[] {
    let i: number = 0;
    let j: number = A.length - 1;
    let s: boolean = true;
    let t: number;

    while (i < j && s) {
      s = false;

      for (let k: number = i; k < j; k++) {
        if (A[k] > A[k + 1]) {
          t = A[k];
          A[k] = A[k + 1];
          A[k + 1] = t;
          s = true;
        }
      }

      j--;

      if (s) {
        s = false;

        for (let k: number = j; k > i; k--) {
          if (A[k] < A[k - 1]) {
            t = A[k];
            A[k] = A[k - 1];
            A[k - 1] = t;
            s = true;
          }
        }
      }

      i++;
    }

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = cocktailSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
});

Scenario("PZ9 @C0911 Gnome sort", () => {
  //шаг 1: сравниваем по очереди два след эл-та (1 и 2, 2 и 3),
  //шаг 2: обменяв два элемента, мы изменили порядок в массиве, выясняем не вступает ли новое расположение в диссонанс с теми элементами, которые мы проверили ранее,
  //сделаем шаг назад, если там теперь тоже не отсортировано, то сделаем ещё шаг назад (так будем отступать до тех пор, пока не достигнем отсортированной части массива),
  //шаг 3: после этого снова можно двигаться дальше вправо.

  function gnomeSort(A: number[]): number[] {
    const n: number = A.length;
    let i: number = 1;
    let j: number = 2;

    while (i < n) {
      if (A[i - 1] < A[i]) {
        i = j;
        j++;
      } else {
        const t: number = A[i - 1];
        A[i - 1] = A[i];
        A[i] = t;
        i--;

        if (i === 0) {
          i = j;
          j++;
        }
      }
    }

    return A;
  }

  const arrayNumbersForCheck: number[] = [0, -10, 5, 4.2, -7.3, 12, 1.8, -17, 24];
  const sortedArray: number[] = gnomeSort(arrayNumbersForCheck);
  console.log(sortedArray); //[-17, -10, -7.3, 0, 1.8, 4.2, 5, 12, 24];
});
