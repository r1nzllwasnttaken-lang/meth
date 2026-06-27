
// Chapter Content (declared before MATH_TOPICS to avoid TDZ errors)

const ALGEBRA_CHAPTERS = [
  {
    number: 'Chapter 1',
    title: 'Understanding Variables & Number Systems',
    content: `
      <h3>The Alphabet of Abstract Math</h3>
      <p>In algebra, a <strong>variable</strong> is a symbol (usually a letter) that acts as a placeholder for an unknown or changing quantity. Variables allow us to express global rules and patterns without getting stuck on single, specific numbers.</p>
      <div class="definition-box">
        <div class="definition-label">The Number Continuum</div>
        <p>Before balancing variables, we classify the sets of numbers they can represent:</p>
        <ul>
          <li><strong>Natural (\\(\\mathbb{N}\\)):</strong> Countable integers \\(\\{1, 2, 3, \\dots\\}\\)</li>
          <li><strong>Integers (\\(\\mathbb{Z}\\)):</strong> Positive and negative whole numbers \\(\\{\\dots, -2, -1, 0, 1, 2, \\dots\\}\\)</li>
          <li><strong>Rational (\\(\\mathbb{Q}\\)):</strong> Any number expressible as a fraction \\(\\frac{p}{q}\\) where \\(p, q \\in \\mathbb{Z}\\) and \\(q \\neq 0\\).</li>
          <li><strong>Real (\\(\\mathbb{R}\\)):</strong> All rational and irrational numbers combined (the entire unbroken geometric number line).</li>
        </ul>
      </div>
      <h4>Axioms of Equality and Operations</h4>
      <p>Every algebraic manipulation you perform relies on preserving structural balance across an equation:</p>
      <div class="math-block highlight">
        Addition Property: If \\(a = b\\), then \\(a + c = b + c\\)<br>
        Multiplication Property: If \\(a = b\\), then \\(ac = bc\\)
      </div>
      <p>These simple properties are the absolute machinery behind isolating variables in multi-step equations.</p>
    `
  },
  {
    number: 'Chapter 2',
    title: 'The Laws of Exponents & Scales',
    content: `
      <h3>Repeated Multiplication and Growth</h3>
      <p>An exponent indicates how many times a base number is multiplied by itself. Managing variables packed into exponential powers requires strict adherence to algebraic arithmetic rules.</p>
      <div class="definition-box">
        <div class="definition-label">Core Exponent Rules</div>
        <p>For any non-zero real bases \\(a, b\\) and integer powers \\(m, n\\):</p>
        <div class="math-block">
          Product Rule: \\(a^m \\cdot a^n = a^{m+n}\\)<br>
          Quotient Rule: \\(\\frac{a^m}{a^n} = a^{m-n}\\)<br>
          Power of a Power: \\((a^m)^n = a^{mn}\\)<br>
          Power of a Product: \\((ab)^n = a^n b^n\\)
        </div>
      </div>
      <h4>The Mechanics of Zero and Negatives</h4>
      <p>What happens when an exponent isn't a positive whole number? The rules dictate clear structural inverses:</p>
      <ul>
        <li><strong>Zero Exponent:</strong> \\(a^0 = 1\\) (derived from \\(\\frac{a^n}{a^n} = a^{n-n} = a^0 = 1\\)).</li>
        <li><strong>Negative Exponents:</strong> A negative power represents a reciprocal multiplier:</li>
      </ul>
      <div class="math-block highlight">\\(a^{-n} = \\frac{1}{a^n}\\quad \\text{and} \\quad \\frac{1}{a^{-n}} = a^n\\)</div>
      <div class="example-box">
        <div class="example-label">Simplification Example</div>
        <p>Simplify \\(\\left(\\frac{2x^2}{y^{-3}}\\right)^3\\):<br>
        First, clear the negative exponent: \\((2x^2 y^3)^3\\)<br>
        Next, distribute the power of 3: \\(2^3 (x^2)^3 (y^3)^3 = 8x^6 y^9\\).</p>
      </div>
    `
  },
  {
    number: 'Chapter 3',
    title: 'Radicals, Roots, and Rational Powers',
    content: `
      <h3>Inverting Powers: The Radical Ecosystem</h3>
      <p>If exponents scale numbers up, <strong>radicals (roots)</strong> find what baseline number was multiplied to get there. Taking a root is the direct operational inverse of raising a number to a power.</p>
      <div class="definition-box">
        <div class="definition-label">The Principle \\(n\\)-th Root</div>
        <p>The expression \\(\\sqrt[n]{a} = b\\) means that \\(b^n = a\\). If the index \\(n\\) is omitted, it is understood to be a <strong>square root</strong> (index 2).</p>
      </div>
      <h4>Rational Exponents: Fractions in the Sky</h4>
      <p>Radicals can be completely converted into fractional exponents. This unifies all exponent laws and radical simplifications into a single framework:</p>
      <div class="math-block highlight">\\(\\sqrt[n]{a} = a^{\\frac{1}{n}}\\quad \\text{and} \\quad \\sqrt[n]{a^m} = a^{\\frac{m}{n}}\\)</div>
      <h4>Properties for Simplification</h4>
      <p>When factoring variables out from underneath radical signs, use these split properties:</p>
      <ul>
        <li>Product Property: \\(\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}\\)</li>
        <li>Quotient Property: \\(\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}\\)</li>
      </ul>
      <div class="example-box">
        <div class="example-label">Rationalizing the Denominator</div>
        <p>In formal algebra, leaving a radical in a fraction's denominator is bad style. To clear it, multiply by an identity element:</p>
        <div class="math-block">\\(\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}\\)</div>
      </div>
    `
  },
  {
    number: 'Chapter 4',
    title: 'Polynomials & Factoring Frameworks',
    content: `
      <h3>Building and Deconstructing Expressions</h3>
      <p>A <strong>polynomial</strong> is an algebraic expression consisting of variables and coefficients combined using only addition, subtraction, multiplication, and non-negative integer exponents.</p>
      <div class="definition-box">
        <div class="definition-label">Standard Forms and Degree</div>
        <p>The highest exponent power of the variable in a polynomial determines its <strong>degree</strong> (e.g., linear is degree 1, quadratic is degree 2, cubic is degree 3). This value dictates how many solutions the function can possess.</p>
      </div>
      <h4>Essential Factoring Archetypes</h4>
      <p>Factoring is the reverse of polynomial multiplication. Recognizing standard structural blueprints allows you to snap complex polynomials down into manageable parts:</p>
      <ul>
        <li><strong>Difference of Two Squares:</strong> \\(a^2 - b^2 = (a - b)(a + b)\\)</li>
        <li><strong>Perfect Square Trinomials:</strong> \\(a^2 \\pm 2ab + b^2 = (a \\pm b)^2\\)</li>
        <li><strong>Sum / Difference of Cubes:</strong></li>
      </ul>
      <div class="math-block highlight">
        \\(a^3 + b^3 = (a + b)(a^2 - ab + b^2)\\)<br>
        \\(a^3 - b^3 = (a - b)(a^2 + ab + b^2)\\)
      </div>
      <div class="example-box">
        <div class="example-label">Factoring by Grouping</div>
        <p>For four-term expressions like \\(x^3 + 3x^2 + 2x + 6\\), split them down the middle and extract common factors:</p>
        <div class="math-block">\\(x^2(x + 3) + 2(x + 3) = (x^2 + 2)(x + 3)\\)</div>
      </div>
    `
  },
  {
    number: 'Chapter 5',
    title: 'Quadratic Equations & The Complex Plane',
    content: `
      <h3>Unlocking Degree-Two Equations</h3>
      <p>When an algebraic expression contains a squared variable (\\(x^2\\)), its geometric graph bends into a symmetrical valley or hill called a parabola. Solving a quadratic means locating where this parabola crosses the x-axis.</p>
      <div class="definition-box">
        <div class="definition-label">The Quadratic Formula</div>
        <p>For any quadratic equation in standard form, \\(ax^2 + bx + c = 0\\) (where \\(a \\neq 0\\)), the solutions are absolutely guaranteed by:</p>
        <div class="math-block highlight">\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)</div>
      </div>
      <h4>The Discriminant Tool</h4>
      <p>The expression trapped inside the radical, \\(D = b^2 - 4ac\\), tells you the nature of your solutions before completing the arithmetic:</p>
      <ul>
        <li>If \\(b^2 - 4ac > 0\\): You get two distinct real number solutions.</li>
        <li>If \\(b^2 - 4ac = 0\\): You get exactly one repeating real solution (the vertex rests directly on the axis).</li>
        <li>If \\(b^2 - 4ac < 0\\): The parabola never touches the real x-axis, forcing the emergence of <strong>complex numbers</strong>.</li>
      </ul>
      <h4>Introducing the Imaginary Unit</h4>
      <p>To compute negative discriminants, algebra breaks boundaries by defining a brand new constant: \\(i = \\sqrt{-1}\\), meaning \\(i^2 = -1\\). Complex answers are written as \\(a + bi\\), where \\(a\\) is real and \\(b\\) is imaginary.</p>
    `
  },
  {
    number: 'Chapter 6',
    title: 'Functions, Domains, and Inverse Maps',
    content: `
      <h3>The Operational Machinery of Algebra</h3>
      <p>An algebraic <strong>function</strong> is a mathematical machine that takes an input variable \\(x\\), processes it through a strict rule, and yields exactly one distinct output value \\(f(x)\\).</p>
      <div class="definition-box">
        <div class="definition-label">Domain and Range Rules</div>
        <p><strong>Domain:</strong> The set of all valid, real inputs allowed into the function machine. In foundational algebra, domain limits are broken by two cardinal sins:</p>
        <ol>
          <li>Dividing by zero (denominators can never equal 0).</li>
          <li>Taking an even root of a negative number (radicands must be \\(\\ge 0\\) inside real math).</li>
        </ol>
        <p><strong>Range:</strong> The complete collection of output values generated by processing the domain.</p>
      </div>
      <h4>Inverse Functions: Reversing the Machine</h4>
      <p>An inverse function, written as \\(f^{-1}(x)\\), completely undoes the operations performed by the original function. If \\(f(a) = b\\), then \\(f^{-1}(b) = a\\).</p>
      <div class="example-box">
        <div class="example-label">Finding an Inverse Analytically</div>
        <p>To find the inverse map of \\(f(x) = 3x - 7\\):<br>
        1. Rewrite as an equation: \\(y = 3x - 7\\)<br>
        2. Swap the input/output variables: \\(x = 3y - 7\\)<br>
        3. Isolate the new \\(y\\): \\(x + 7 = 3y \\implies y = \\frac{x + 7}{3}\\)<br>
        Therefore, \\(f^{-1}(x) = \\frac{x + 7}{3}\\).</p>
      </div>
    `
  }
];

const GEOMETRY_CHAPTERS = [
  {
    number: 'Chapter 1',
    title: 'Euclidean Foundations & Angle Systems',
    content: `
      <h3>The Rules of Flat Space</h3>
      <p>Geometry builds directly from a small set of self-evident truths called <strong>postulates</strong>. From these baselines, we can mathematically calculate structural interactions across planes and intersections.</p>
      <div class="definition-box">
        <div class="definition-label">Foundational Postulates</div>
        <ul>
          <li>A unique straight line segment can be drawn joining any two distinct points.</li>
          <li>All right angles are perfectly congruent to one another (\\(90^\\circ = \\pi/2\\text{ rad}\\)).</li>
          <li><strong>The Parallel Postulate:</strong> If a line intersecting two straight lines makes the interior angles on the same side less than two right angles, the two lines will eventually meet if extended infinitely.</li>
        </ul>
      </div>
      <h4>Parallel Lines and Transversals</h4>
      <p>When a straight transversal line slices through two parallel lines (\\(L_1 \\parallel L_2\\)), it locks down predictable angle equations:</p>
      <div class="math-block highlight">
        Alternate Interior Angles: \\(\\angle A = \\angle B\\)<br>
        Corresponding Angles: \\(\\angle C = \\angle D\\)<br>
        Consecutive Interior Angles: \\(\\angle M + \\angle N = 180^\\circ\\)
      </div>
      <p>These spatial identities form the mathematical baseline for proving internal tracking loops in polygons.</p>
    `
  },
  {
    number: 'Chapter 2',
    title: 'Triangles: Rigidity, Similarity, and Metric Space',
    content: `
      <h3>The Foundational Three-Sided Polygon</h3>
      <p>Triangles are the structural bedrock of geometry because they are inherently rigid; their tracking dimensions cannot deform without physically altering side lengths.</p>
      <h4>Internal Angles Absolute</h4>
      <div class="math-block highlight">\\(\\sum \\theta_{\\text{internal}} = 180^\\circ \\quad (\\pi \\text{ radians})\\)</div>
      <div class="definition-box">
        <div class="definition-label">Congruence vs. Similarity</div>
        <p><strong>Congruence (Identical):</strong> Triangles match perfectly in both size and shape. Proven via <em>SSS, SAS, ASA, or AAS</em>.</p>
        <p><strong>Similarity (Scaled):</strong> Triangles share identical internal angles but feature proportionally scaled side lengths. Proven via <em>AA, SAS similarity, or SSS similarity</em>:</p>
        <div class="math-block">\\(\\Delta ABC \\sim \\Delta DEF \\implies \\frac{a}{d} = \\frac{b}{e} = \\frac{c}{f}\\)</div>
      </div>
      <h4>The Metric Blueprint: Right-Angled Systems</h4>
      <p>For any right triangle where \\(c\\) represents the hypotenuse:</p>
      <ul>
        <li><strong>Pythagorean Theorem:</strong> \\(a^2 + b^2 = c^2\\)</li>
        <li><strong>Area Calculation:</strong> \\(\\text{Area} = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}\\)</li>
        <li><strong>Heron's Formula (For any triangle with semiperimeter \\(s = \\frac{a+b+c}{2}\\)):</strong></li>
      </ul>
      <div class="math-block">\\(\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}\\)</div>
    `
  },
  {
    number: 'Chapter 3',
    title: 'Quadrilaterals & Convex Polygons',
    content: `
      <h3>Expanding Sides: Closed Polygon Systems</h3>
      <p>As we add straight line segments, we classify shapes based on parallel pairings and internal symmetry lines.</p>
      <div class="definition-box">
        <div class="definition-label">The Quadrilateral Tree</div>
        <ul>
          <li><strong>Parallelogram:</strong> Opposite sides are parallel and congruent. Opposite angles are equal. Area: \\(A = bh\\).</li>
          <li><strong>Rectangle:</strong> Parallelogram with four perfect \\(90^\\circ\\) angles. Diagonal tracks are congruent. Area: \\(A = lw\\).</li>
          <li><strong>Rhombus:</strong> Parallelogram with four equilateral sides. Diagonals cross perpendicularly (\\(90^\\circ\\)). Area: \\(A = \\frac{1}{2}d_1d_2\\).</li>
          <li><strong>Trapezoid:</strong> Exactly one pair of parallel bases. Area: \\(A = \\frac{a+b}{2}h\\).</li>
        </ul>
      </div>
      <h4>General \\(n\\)-sided Convex Polygons</h4>
      <p>For any closed, non-self-intersecting polygon containing \\(n\\) individual straight vertices:</p>
      <div class="math-block highlight">
        Sum of Interior Angles: \\(S_{\\text{int}} = (n - 2) \\cdot 180^\\circ\\)<br>
        Sum of Exterior Angles: \\(S_{\\text{ext}} = 360^\\circ \\quad \\text{(Always structural constant)}\\)
      </div>
      <div class="example-box">
        <div class="example-label">Regular Octagon Calculation</div>
        <p>An 8-sided regular layout has an interior sum of \\((8-2) \\cdot 180 = 1080^\\circ\\). Each individual symmetrical internal angle is exactly \\(1080 / 8 = 135^\\circ\\).</p>
      </div>
    `
  },
  {
    number: 'Chapter 4',
    title: 'Circle Mechanics & Planar Limits',
    content: `
      <h3>The Infinite Polygon Limit</h3>
      <p>A circle represents a continuous locus of points resting perfectly equidistant from a single central origin point in a 2D plane.</p>
      <div class="definition-box">
        <div class="definition-label">Core Dimensions</div>
        <p>Given radius \\(r\\) and diameter \\(d = 2r\\):</p>
        <div class="math-block">\\(\\text{Circumference } (C) = 2\\pi r \\quad \\text{and} \\quad \\text{Area } (A) = \\pi r^2\\)</div>
      </div>
      <h4>Chords, Secants, and Tangents</h4>
      <p>When straight tracking lines interact with a circle's continuous boundary curve, they lock down specific spatial theorems:</p>
      <ul>
        <li><strong>Tangent Perpendicularity:</strong> A tangent line touches the circle at exactly one point and rests perfectly perpendicular (\\(90^\\circ\\)) to the radius at that coordinate.</li>
        <li><strong>Inscribed Angle Theorem:</strong> An angle \\(\\theta\\) inscribed on the circle perimeter intercepts an arc exactly half the size of the central angle pointing to the same arc:</li>
      </ul>
      <div class="math-block highlight">\\(\\theta_{\\text{inscribed}} = \\frac{1}{2}\\theta_{\\text{central}}\\)</div>
      <h4>The Power of a Point Theorem</h4>
      <p>If two chords intersect inside a circle at a crossing coordinate, the segment pieces yield an exact product balance: \\(PA \\cdot PB = PC \\cdot PD\\).</p>
    `
  },
  {
    number: 'Chapter 5',
    title: '3D Solid Geometry: Polyhedra & Flat-Faced Solids',
    content: `
      <h3>Stepping into Three-Dimensional Space</h3>
      <p>When we exit the flat plane, shapes gain a new metric dimension: <strong>Volume (\\(V\\))</strong>, while their perimeter limits expand into multi-faced boundaries called <strong>Surface Area (\\(SA\\))</strong>.</p>
      <div class="definition-box">
        <div class="definition-label">Prisms and Pyramids</div>
        <p><strong>Right Prisms:</strong> Extruded 2D tracking bases. Volume is calculated as the flat base area cross-section multiplied by the structural height:</p>
        <div class="math-block">\\(V = A_{\\text{base}} \\cdot h\\)</div>
        <p><strong>Pyramids:</strong> Polyhedra built by anchoring a 2D base profile back to a single sharp apex point in space. They occupy exactly one-third the volume envelope of a matching prism:</p>
        <div class="math-block highlight">\\(V = \\frac{1}{3} A_{\\text{base}} \\cdot h\\)</div>
      </div>
      <h4>Euler\'s Polyhedral Formula</h4>
      <p>For any standard convex polyhedron (like cubes, prisms, or pyramids), the number of flat faces (\\(F\\)), vertices/corners (\\(V\\)), and connecting line edges (\\(E\\)) must rigidly satisfy an algebraic constant value:</p>
      <div class="math-block">\\(V - E + F = 2\\)</div>
    `
  },
  {
    number: 'Chapter 6',
    title: 'Curved 3D Space & Revolution Volumes',
    content: `
      <h3>Rotational Calculus Shapes</h3>
      <p>By rotating 2D profiles around spatial tracking axes, we generate smooth, curved 3D solid structures.</p>
      <div class="definition-box">
        <div class="definition-label">Cylinders and Cones</div>
        <p><strong>Right Circular Cylinder:</strong> Generated by revolving a rectangle around an edge. Contains flat circle ends and a unrolled sheet midsection:</p>
        <div class="math-block">\\(V = \\pi r^2 h \\quad \\text{and} \\quad SA = 2\\pi r^2 + 2\\pi rh\\)</div>
        <p><strong>Right Circular Cone:</strong> Generated by revolving a right triangle around a leg. Employs a slant height vector \\(l = \\sqrt{r^2 + h^2}\\):</p>
        <div class="math-block">\\(V = \\frac{1}{3}\\pi r^2 h \\quad \\text{and} \\quad SA = \\pi r^2 + \\pi rl\\)</div>
      </div>
      <h4>The Perfect Symmetrical Envelope: The Sphere</h4>
      <p>A sphere is the set of all points in 3D space resting completely equidistant from a center coordinate point. It minimizes surface area relative to its internal spatial displacement:</p>
      <div class="math-block highlight">\\(V = \\frac{4}{3}\\pi r^3\\)<br>\\(SA = 4\\pi r^2\\)</div>
      <div class="example-box">
        <div class="example-label">Structural Metric Connection</div>
        <p>Notice that taking the derivative of a sphere's volume function with respect to its radius yields its exact surface area formula: \\(\\frac{d}{dr}\\left(\\frac{4}{3}\\pi r^3\\right) = 4\\pi r^2\\). The rate of volumetric growth exactly matches its outer skin boundary layer.</p>
      </div>
    `
  }
];

const TRIGONOMETRY_CHAPTERS = [
  {
    number: 'Chapter 1',
    title: 'Right Triangle Trigonometry',
    content: `
      <h3>Sine, Cosine, and Tangent</h3>
      <p>In a right triangle, trigonometric ratios relate an angle to side lengths.</p>
      <div class="definition-box">
        <div class="definition-label">SOH-CAH-TOA</div>
        <p>\\(\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}}\\)<br>
        \\(\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}\\)<br>
        \\(\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}\\)</p>
      </div>
      <h4>Solving Missing Sides</h4>
      <p>Given angle \\(\\theta\\) and one side, use trig ratios to solve for unknown sides.</p>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>If \\(\\theta = 30^\\circ\\) and hypotenuse \\(=10\\), then opposite side is:</p>
        <div class="math-block">\\(\\text{opp} = 10\\sin(30^\\circ) = 10\\cdot\\frac{1}{2} = 5\\)</div>
      </div>
      <h4>Inverse Trig</h4>
      <p>Use inverse functions for unknown angles: \\(\\theta = \\sin^{-1}(x)\\), \\(\\cos^{-1}(x)\\), \\(\\tan^{-1}(x)\\).</p>
    `
  },
  {
    number: 'Chapter 2',
    title: 'The Unit Circle',
    content: `
      <h3>Trig Beyond Right Triangles</h3>
      <p>The unit circle has radius 1 centered at the origin. It lets us define trig functions for any angle.</p>
      <div class="definition-box">
        <div class="definition-label">Coordinate Meaning</div>
        <p>For angle \\(\\theta\\), the point on the unit circle is \\((\\cos\\theta,\\sin\\theta)\\).</p>
      </div>
      <h4>Quadrant Signs</h4>
      <ul>
        <li><strong>QI:</strong> \\(\\sin\\theta > 0,\\ \\cos\\theta > 0\\)</li>
        <li><strong>QII:</strong> \\(\\sin\\theta > 0,\\ \\cos\\theta < 0\\)</li>
        <li><strong>QIII:</strong> \\(\\sin\\theta < 0,\\ \\cos\\theta < 0\\)</li>
        <li><strong>QIV:</strong> \\(\\sin\\theta < 0,\\ \\cos\\theta > 0\\)</li>
      </ul>
      <div class="example-box">
        <div class="example-label">Common Values</div>
        <div class="math-block">
          \\(\\sin 0^\\circ = 0,\\ \\cos 0^\\circ = 1\\)<br>
          \\(\\sin 90^\\circ = 1,\\ \\cos 90^\\circ = 0\\)<br>
          \\(\\sin 180^\\circ = 0,\\ \\cos 180^\\circ = -1\\)
        </div>
      </div>
      <p>Radians are often used in advanced math: \\(180^\\circ = \\pi\\) radians.</p>
    `
  },
  {
    number: 'Chapter 3',
    title: 'Trig Identities and Equations',
    content: `
      <h3>Core Identities</h3>
      <p>Identities are equations true for all values in their domain.</p>
      <div class="definition-box">
        <div class="definition-label">Fundamental Identity</div>
        <p>\\(\\sin^2\\theta + \\cos^2\\theta = 1\\)</p>
      </div>
      <h4>Useful Derived Forms</h4>
      <div class="math-block">
        \\(1 + \\tan^2\\theta = \\sec^2\\theta\\)<br>
        \\(1 + \\cot^2\\theta = \\csc^2\\theta\\)
      </div>
      <h4>Solving Basic Trig Equations</h4>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>Solve \\(\\sin\\theta = \\frac{1}{2}\\) on \\([0^\\circ,360^\\circ)\\):</p>
        <div class="math-block">\\(\\theta = 30^\\circ,\\ 150^\\circ\\)</div>
      </div>
      <p>General solutions use periodicity, e.g. \\(\\sin(\\theta)=\\sin(\\alpha)\\) repeats every \\(360^\\circ\\) (or \\(2\\pi\\) radians).</p>
    `
  }
];

const CALCULUS_CHAPTERS = [
  {
    number: 'Chapter 1',
    title: 'Limits and Continuity',
    content: `
      <h3>The Language of Approaching Values</h3>
      <p>Calculus starts with the idea of a <strong>limit</strong>: what value a function approaches as input approaches a point. Limits let us define instantaneous change and accumulation.</p>
      <div class="definition-box">
        <div class="definition-label">Limit Notation</div>
        <p>\\(\\lim_{x \\to a} f(x) = L\\) means values of \\(f(x)\\) can be made arbitrarily close to \\(L\\) by taking \\(x\\) sufficiently close to \\(a\\) (but \\(x \\neq a\\)).</p>
      </div>
      <h4>Formal (\\(\\varepsilon\\)-\\(\\delta\\)) Definition</h4>
      <div class="math-block">\\(\\forall \\varepsilon > 0,\\ \\exists \\delta > 0\\) such that \\(0<|x-a|<\\delta \\implies |f(x)-L|<\\varepsilon\\).</div>
      <h4>Continuity</h4>
      <p>A function is continuous at \\(a\\) if:</p>
      <div class="math-block highlight">\\(\\lim_{x \\to a} f(x) = f(a)\\)</div>
      <ul>
        <li><strong>Types of discontinuities:</strong> removable, jump, infinite, oscillatory</li>
        <li><strong>Key theorem:</strong> Intermediate Value Theorem (IVT)</li>
        <li><strong>Squeeze theorem:</strong> traps a function between two functions with same limit</li>
      </ul>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>\\(\\lim_{x \\to 2} (3x^2 - x + 1) = 11\\) by direct substitution (polynomials are continuous).</p>
      </div>
    `
  },
  {
    number: 'Chapter 2',
    title: 'Derivative from First Principles',
    content: `
      <h3>Instantaneous Rate of Change</h3>
      <p>The derivative measures how fast a function changes at a point. Geometrically, it is the slope of the tangent line.</p>
      <div class="definition-box">
        <div class="definition-label">Definition</div>
        <p>\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}\\)</p>
      </div>
      <h4>Alternative Form</h4>
      <div class="math-block">\\(f'(a)=\\lim_{x \\to a}\\frac{f(x)-f(a)}{x-a}\\)</div>
      <h4>Differentiability vs Continuity</h4>
      <ul>
        <li>Differentiable \\(\\Rightarrow\\) continuous</li>
        <li>Continuous does <strong>not</strong> always imply differentiable (corners/cusps/vertical tangents)</li>
      </ul>
      <div class="example-box">
        <div class="example-label">Example: \\(f(x)=x^2\\)</div>
        <div class="math-block">\\(f'(x)=\\lim_{h\\to0}\\frac{(x+h)^2-x^2}{h}=\\lim_{h\\to0}(2x+h)=2x\\)</div>
      </div>
      <h4>Physical Interpretation</h4>
      <p>If \\(s(t)\\) is position, then \\(s'(t)=v(t)\\) velocity and \\(v'(t)=a(t)\\) acceleration.</p>
    `
  },
  {
    number: 'Chapter 3',
    title: 'Differentiation Toolbox',
    content: `
      <h3>Core Derivative Rules</h3>
      <div class="definition-box">
        <div class="definition-label">Rule Set</div>
        <p>Power: \\(\\frac{d}{dx}x^n = nx^{n-1}\\)<br>
        Product: \\( (fg)' = f'g + fg'\\)<br>
        Quotient: \\(\\left(\\frac{f}{g}\\right)' = \\frac{f'g-fg'}{g^2}\\)<br>
        Chain: \\((f\\circ g)'(x)=f'(g(x))g'(x)\\)</p>
      </div>
      <h4>High-Value Derivatives</h4>
      <div class="math-block">
        \\(\\frac{d}{dx}e^x=e^x,\\ \\frac{d}{dx}a^x=a^x\\ln a\\)<br>
        \\(\\frac{d}{dx}\\ln x=\\frac{1}{x},\\ \\frac{d}{dx}\\log_a x=\\frac{1}{x\\ln a}\\)<br>
        \\(\\frac{d}{dx}\\sin x=\\cos x,\\ \\frac{d}{dx}\\cos x=-\\sin x\\)
      </div>
      <h4>Implicit and Logarithmic Differentiation</h4>
      <p>Useful when \\(y\\) is mixed with \\(x\\), or when products/powers are complicated: take \\(\\ln\\) of both sides first.</p>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>\\(y=x^x\\Rightarrow \\ln y=x\\ln x\\Rightarrow \\frac{y'}{y}=\\ln x+1\\Rightarrow y'=x^x(\\ln x+1)\\)</p>
      </div>
      <h4>Higher Derivatives</h4>
      <p>\\(f''(x)\\), \\(f^{(3)}(x)\\), etc. support concavity, jerk, and series expansion analysis.</p>
    `
  },
  {
    number: 'Chapter 4',
    title: 'Applications of Derivatives',
    content: `
      <h3>From Formula to Decision-Making</h3>
      <p>Derivatives drive optimization, curve analysis, and motion modeling.</p>
      <div class="definition-box">
        <div class="definition-label">Critical Points</div>
        <p>Critical points occur where \\(f'(x)=0\\) or \\(f'\\) is undefined (with \\(f\\) defined).</p>
      </div>
      <h4>Monotonicity and Extrema Tests</h4>
      <ul>
        <li><strong>First derivative test:</strong> sign changes in \\(f'\\) classify local min/max</li>
        <li><strong>Second derivative test:</strong> if \\(f'(c)=0\\) and \\(f''(c)>0\\), local min; if \\(f''(c)<0\\), local max</li>
        <li><strong>Concavity:</strong> \\(f''>0\\) concave up, \\(f''<0\\) concave down</li>
      </ul>
      <h4>Theorems</h4>
      <div class="math-block">
        Mean Value Theorem: \\(\\exists c\\in(a,b)\\) with \\(f'(c)=\\frac{f(b)-f(a)}{b-a}\\)<br>
        Rolle's Theorem: if \\(f(a)=f(b)\\), then \\(\\exists c\\in(a,b): f'(c)=0\\)
      </div>
      <h4>Related Rates</h4>
      <p>Differentiate equations with respect to time using chain rule to connect changing quantities.</p>
      <div class="example-box">
        <div class="example-label">Optimization Workflow</div>
        <p>Model \\(\\to\\) objective function \\(\\to\\) domain \\(\\to\\) critical points/endpoints \\(\\to\\) interpret units/context.</p>
      </div>
    `
  },
  {
    number: 'Chapter 5',
    title: 'Antiderivatives and Indefinite Integrals',
    content: `
      <h3>Reversing Differentiation</h3>
      <p>An antiderivative of \\(f\\) is a function \\(F\\) such that \\(F'=f\\). The indefinite integral collects all antiderivatives.</p>
      <div class="definition-box">
        <div class="definition-label">Indefinite Integral</div>
        <p>\\(\\int f(x)\\,dx = F(x) + C\\), where \\(F'(x)=f(x)\\).</p>
      </div>
      <h4>Core Patterns</h4>
      <div class="math-block">
        \\(\\int x^n dx = \\frac{x^{n+1}}{n+1}+C\\) for \\(n\\neq -1\\)<br>
        \\(\\int \\frac{1}{x}dx = \\ln|x| + C\\)<br>
        \\(\\int e^x dx = e^x + C\\), \\(\\int \\cos x\\,dx=\\sin x + C\\)
      </div>
      <h4>Substitution (Reverse Chain Rule)</h4>
      <div class="math-block highlight">Let \\(u=g(x)\\), then \\(\\int f(g(x))g'(x)dx = \\int f(u)du\\)</div>
      <h4>Initial Value Problems</h4>
      <p>Use an initial condition like \\(y(0)=3\\) to solve for \\(C\\).</p>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>If \\(y' = 6x\\) and \\(y(1)=5\\), then \\(y=3x^2+C\\), so \\(5=3+C\\Rightarrow C=2\\).</p>
      </div>
    `
  },
  {
    number: 'Chapter 6',
    title: 'Definite Integrals and the Fundamental Theorem',
    content: `
      <h3>Accumulation as Area and Net Change</h3>
      <p>The definite integral measures signed accumulation over an interval.</p>
      <div class="definition-box">
        <div class="definition-label">Riemann Sum</div>
        <p>\\(\\int_a^b f(x)dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x\\)</p>
      </div>
      <h4>Fundamental Theorem of Calculus (FTC)</h4>
      <div class="math-block">
        Part I: \\(\\frac{d}{dx}\\int_a^x f(t)dt = f(x)\\)<br>
        Part II: if \\(F'=f\\), then \\(\\int_a^b f(x)dx = F(b)-F(a)\\)
      </div>
      <h4>Useful Properties</h4>
      <ul>
        <li>Linearity: \\(\\int (af+bg)=a\\int f+b\\int g\\)</li>
        <li>Additivity on intervals: \\(\\int_a^c f = \\int_a^b f + \\int_b^c f\\)</li>
        <li>Average value: \\(f_{avg}=\\frac{1}{b-a}\\int_a^b f(x)dx\\)</li>
      </ul>
      <div class="example-box">
        <div class="example-label">Example</div>
        <div class="math-block">\\(\\int_0^2 (3x^2+1)dx=[x^3+x]_0^2=10\\)</div>
      </div>
    `
  },
  {
    number: 'Chapter 7',
    title: 'Integration Techniques',
    content: `
      <h3>How to Integrate Hard Functions</h3>
      <div class="definition-box">
        <div class="definition-label">Essential Techniques</div>
        <p>u-substitution, integration by parts, trigonometric identities/substitution, partial fractions, and reduction formulas.</p>
      </div>
      <h4>Integration by Parts</h4>
      <div class="math-block highlight">\\(\\int u\\,dv = uv - \\int v\\,du\\)</div>
      <h4>Trigonometric Integrals</h4>
      <ul>
        <li>Use identities for powers of \\(\\sin x\\), \\(\\cos x\\)</li>
        <li>For radicals like \\(\\sqrt{a^2-x^2}\\), use trig substitution</li>
      </ul>
      <h4>Partial Fractions</h4>
      <p>Decompose rational functions when degree(numerator) &lt; degree(denominator).</p>
      <div class="example-box">
        <div class="example-label">Example</div>
        <div class="math-block">\\(\\int xe^x dx = xe^x - \\int e^x dx = e^x(x-1)+C\\)</div>
      </div>
      <h4>Technique Selection Heuristic</h4>
      <p>Try algebraic simplification first, then u-substitution, then parts/partial fractions/trig methods.</p>
    `
  },
  {
    number: 'Chapter 8',
    title: 'Applications of Integration',
    content: `
      <h3>Geometry, Physics, and Probability</h3>
      <p>Integrals compute area, volume, distance, mass distributions, work, and expected values.</p>
      <div class="definition-box">
        <div class="definition-label">Area Between Curves</div>
        <p>\\(A = \\int_a^b [f(x)-g(x)]dx\\), with \\(f(x)\\ge g(x)\\) on \\([a,b]\\).</p>
      </div>
      <h4>Volume Methods</h4>
      <div class="math-block">
        Disk/Washer: \\(V = \\pi\\int_a^b (R^2-r^2)dx\\)<br>
        Shell: \\(V = 2\\pi\\int_a^b (radius)(height)dx\\)
      </div>
      <h4>Arc Length and Surface Area</h4>
      <div class="math-block">
        Arc length: \\(L=\\int_a^b \\sqrt{1+[f'(x)]^2}dx\\)<br>
        Surface of revolution: \\(S=2\\pi\\int_a^b f(x)\\sqrt{1+[f'(x)]^2}dx\\)
      </div>
      <h4>Physical Applications</h4>
      <ul>
        <li><strong>Work:</strong> \\(W=\\int_a^b F(x)dx\\)</li>
        <li><strong>Center of mass:</strong> weighted integrals</li>
        <li><strong>Probability:</strong> \\(P(a\\le X\\le b)=\\int_a^b p(x)dx\\)</li>
      </ul>
    `
  },
  {
    number: 'Chapter 9',
    title: 'Improper Integrals and Numerical Quadrature',
    content: `
      <h3>When Bounds or Values Blow Up</h3>
      <div class="definition-box">
        <div class="definition-label">Improper Integral</div>
        <p>Defined by limits when interval is infinite or integrand is unbounded.</p>
      </div>
      <div class="math-block">
        \\(\\int_1^{\\infty} f(x)dx = \\lim_{b\\to\\infty}\\int_1^b f(x)dx\\)<br>
        \\(\\int_a^b f(x)dx\\) with vertical asymptote at \\(c\\): split at \\(c\\) and use limits.
      </div>
      <h4>Convergence Benchmarks</h4>
      <div class="math-block highlight">\\(\\int_1^{\\infty}\\frac{1}{x^p}dx\\) converges iff \\(p>1\\)</div>
      <h4>Comparison Tests</h4>
      <ul>
        <li>Direct comparison and limit comparison for nonnegative functions</li>
        <li>Absolute convergence ideas extend from series intuition</li>
      </ul>
      <h4>Numerical Integration</h4>
      <div class="math-block">
        Trapezoidal: \\(T_n=\\frac{\\Delta x}{2}[f(x_0)+2\\sum f(x_i)+f(x_n)]\\)<br>
        Simpson: \\(S_n=\\frac{\\Delta x}{3}[f(x_0)+4\\sum f(x_{odd})+2\\sum f(x_{even})+f(x_n)]\\)
      </div>
      <p>Numerical methods are essential when antiderivatives are unavailable.</p>
    `
  },
  {
    number: 'Chapter 10',
    title: 'Sequences and Infinite Series',
    content: `
      <h3>Infinite Processes with Finite Meaning</h3>
      <div class="definition-box">
        <div class="definition-label">Sequence and Series</div>
        <p>A sequence is \\(\\{a_n\\}\\); a series is \\(\\sum_{n=1}^{\\infty} a_n\\).</p>
      </div>
      <h4>Essential Families</h4>
      <div class="math-block">
        Geometric: \\(\\sum ar^n\\) converges if \\(|r|<1\\)<br>
        p-series: \\(\\sum \\frac{1}{n^p}\\) converges iff \\(p>1\\)
      </div>
      <h4>Convergence Tests</h4>
      <ul>
        <li>Divergence (nth-term) test</li>
        <li>Integral test</li>
        <li>Comparison and limit comparison</li>
        <li>Ratio test and root test</li>
        <li>Alternating series test (Leibniz)</li>
      </ul>
      <h4>Absolute vs Conditional Convergence</h4>
      <p>If \\(\\sum |a_n|\\) converges, then \\(\\sum a_n\\) converges absolutely.</p>
      <div class="example-box">
        <div class="example-label">Classic Example</div>
        <p>\\(\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}\\) converges conditionally, but not absolutely.</p>
      </div>
    `
  },
  {
    number: 'Chapter 11',
    title: 'Power Series and Taylor Theory',
    content: `
      <h3>Functions as Infinite Polynomials</h3>
      <div class="definition-box">
        <div class="definition-label">Power Series</div>
        <p>\\(\\sum_{n=0}^{\\infty} c_n(x-a)^n\\), valid inside radius of convergence \\(R\\).</p>
      </div>
      <h4>Taylor and Maclaurin Series</h4>
      <div class="math-block highlight">\\(f(x)=\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n\\)</div>
      <h4>Foundational Expansions</h4>
      <div class="math-block">
        \\(e^x=\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}\\)<br>
        \\(\\sin x=\\sum_{n=0}^{\\infty}(-1)^n\\frac{x^{2n+1}}{(2n+1)!}\\)<br>
        \\(\\cos x=\\sum_{n=0}^{\\infty}(-1)^n\\frac{x^{2n}}{(2n)!}\\)<br>
        \\(\\ln(1+x)=\\sum_{n=1}^{\\infty}(-1)^{n+1}\\frac{x^n}{n}\\) for \\(|x|<1\\)
      </div>
      <h4>Error Control</h4>
      <p>Lagrange remainder: \\(R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}\\) for some \\(\\xi\\) between \\(a\\) and \\(x\\).</p>
    `
  },
  {
    number: 'Chapter 12',
    title: 'Parametric Curves and Polar Calculus',
    content: `
      <h3>Calculus Beyond \\(y=f(x)\\)</h3>
      <p>Many trajectories are better represented by parameters or angle-based coordinates.</p>
      <div class="definition-box">
        <div class="definition-label">Parametric Form</div>
        <p>\\(x=x(t),\\ y=y(t)\\), with slope \\(\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}\\).</p>
      </div>
      <h4>Parametric Arc Length</h4>
      <div class="math-block">\\(L=\\int_{t_1}^{t_2}\\sqrt{(x'(t))^2+(y'(t))^2}\\,dt\\)</div>
      <h4>Polar Coordinates</h4>
      <div class="math-block">
        \\(x=r\\cos\\theta,\\ y=r\\sin\\theta\\)<br>
        Polar area: \\(A=\\frac12\\int_{\\alpha}^{\\beta} r(\\theta)^2 d\\theta\\)
      </div>
      <h4>Applications</h4>
      <ul>
        <li>Projectile and orbital motion</li>
        <li>Spirals, cardioids, rose curves</li>
        <li>Curvature and trajectory geometry</li>
      </ul>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>For \\(r=2(1+\\cos\\theta)\\), area over \\(0\\le\\theta\\le2\\pi\\) is \\(\\frac12\\int_0^{2\\pi}r^2d\\theta\\).</p>
      </div>
    `
  },
  {
    number: 'Chapter 13',
    title: 'Multivariable Differential Calculus',
    content: `
      <h3>Functions of Several Variables</h3>
      <p>In higher dimensions, change depends on direction as well as magnitude.</p>
      <div class="definition-box">
        <div class="definition-label">Partial Derivatives</div>
        <p>\\(f_x=\\frac{\\partial f}{\\partial x}\\), \\(f_y=\\frac{\\partial f}{\\partial y}\\) hold other variables constant.</p>
      </div>
      <h4>Gradient and Directional Derivative</h4>
      <div class="math-block">
        Gradient: \\(\\nabla f=\\langle f_x,f_y,f_z\\rangle\\)<br>
        Directional derivative: \\(D_{\\mathbf{u}}f=\\nabla f\\cdot \\mathbf{u}\\)
      </div>
      <h4>Tangent Planes and Linearization</h4>
      <div class="math-block highlight">For \\(z=f(x,y)\\): \\(z\\approx f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\\)</div>
      <h4>Optimization in Higher Dimensions</h4>
      <ul>
        <li>Critical points where \\(\\nabla f=\\mathbf{0}\\)</li>
        <li>Second derivative test via Hessian determinant</li>
        <li>Lagrange multipliers for constraints: \\(\\nabla f=\\lambda\\nabla g\\)</li>
      </ul>
      <p>Multivariable chain rule and Jacobians connect coordinate transformations and composite maps.</p>
    `
  },
  {
    number: 'Chapter 14',
    title: 'Multiple Integrals and Vector Calculus Theorems',
    content: `
      <h3>Accumulation in 2D and 3D</h3>
      <div class="definition-box">
        <div class="definition-label">Double and Triple Integrals</div>
        <p>\\(\\iint_D f(x,y)dA\\), \\(\\iiint_E f(x,y,z)dV\\) compute mass, charge, probability, and flux-like quantities.</p>
      </div>
      <h4>Coordinate Changes</h4>
      <div class="math-block">
        Polar: \\(dA = r\\,dr\\,d\\theta\\)<br>
        Cylindrical: \\(dV = r\\,dr\\,d\\theta\\,dz\\)<br>
        Spherical: \\(dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\)
      </div>
      <h4>Line and Surface Integrals</h4>
      <div class="math-block">
        Line integral: \\(\\int_C \\mathbf{F}\\cdot d\\mathbf{r}\\)<br>
        Surface flux: \\(\\iint_S \\mathbf{F}\\cdot \\mathbf{n}\\,dS\\)
      </div>
      <h4>Major Integral Theorems</h4>
      <div class="math-block highlight">
        Green: \\(\\oint_C Pdx+Qdy=\\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dA\\)<br>
        Stokes: \\(\\iint_S (\\nabla\\times\\mathbf{F})\\cdot d\\mathbf{S}=\\oint_{\\partial S}\\mathbf{F}\\cdot d\\mathbf{r}\\)<br>
        Divergence: \\(\\iiint_E \\nabla\\cdot\\mathbf{F}\\,dV=\\iint_{\\partial E}\\mathbf{F}\\cdot \\mathbf{n}\\,dS\\)
      </div>
    `
  },
  {
    number: 'Chapter 15',
    title: 'Differential Equations and Dynamical Systems',
    content: `
      <h3>Modeling Time-Driven Change</h3>
      <p>Differential equations express relationships between a function and its derivatives.</p>
      <div class="definition-box">
        <div class="definition-label">First-Order Core Forms</div>
        <p>Separable: \\(\\frac{dy}{dx}=g(x)h(y)\\)<br>
        Linear: \\(y'+p(x)y=q(x)\\), integrating factor \\(\\mu(x)=e^{\\int p(x)dx}\\)</p>
      </div>
      <h4>Second-Order Linear ODEs</h4>
      <div class="math-block">
        \\(ay''+by'+cy=0\\) with characteristic equation \\(ar^2+br+c=0\\)<br>
        Distinct roots, repeated roots, and complex roots produce different solution families.
      </div>
      <h4>Canonical Models</h4>
      <ul>
        <li><strong>Exponential growth/decay:</strong> \\(y'=ky\\)</li>
        <li><strong>Logistic model:</strong> \\(y'=ky(1-\\frac{y}{M})\\)</li>
        <li><strong>Simple harmonic oscillator:</strong> \\(m x'' + kx = 0\\)</li>
      </ul>
      <h4>Numerical ODE Solvers</h4>
      <div class="math-block">Euler: \\(y_{n+1}=y_n+h f(x_n,y_n)\\), RK4 for higher accuracy and better stability.</div>
      <h4>Big Picture</h4>
      <p>Calculus unifies geometry, motion, optimization, approximation, and field theory. Mastery comes from theory + computation + modeling practice.</p>
    `
  }
];

const LINEAR_ALGEBRA_CHAPTERS = [
  {
    number: 'Chapter 1',
    title: 'Vector Spaces and Linear Combinations',
    content: `
      <h3>Beyond Arrows in Space</h3>
      <p>Linear algebra is the study of lines, planes, and vectors, expanding into abstract multi-dimensional structures. We begin by defining a <strong>vector space</strong>—a sandbox where vectors can be scaled and added together without leaving the space.</p>
      <div class="definition-box">
        <div class="definition-label">Linear Combination</div>
        <p>Given a set of vectors \\(\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n\\}\\) and scalars \\(\\{c_1, c_2, \\dots, c_n\\}\\), a linear combination is an expression of the form:</p>
        <div class="math-block">\\(\\mathbf{y} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\dots + c_n\\mathbf{v}_n\\)</div>
      </div>
      <h4>The Concept of Span</h4>
      <p>The <strong>span</strong> of a set of vectors is the collection of all possible linear combinations you can create with them. Geometrically, the span of two non-collinear vectors in 3D space forms a perfect 2D flat plane slicing through the origin.</p>
      <h4>Linear Independence</h4>
      <p>A set of vectors is <strong>linearly independent</strong> if no vector in the set can be built from a linear combination of the remaining vectors. Mathematically, the vector equation:</p>
      <div class="math-block highlight">\\(c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\dots + c_n\\mathbf{v}_n = \\mathbf{0}\\)</div>
      <p>has <em>only</em> the trivial solution where every scalar is exactly zero: \\(c_1 = c_2 = \\dots = c_n = 0\\). If a non-zero combination can equal the zero vector, the set is dependent.</p>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>The standard basis vectors in \\(\\mathbb{R}^2\\), \\(\\mathbf{e}_1 = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}\\) and \\(\\mathbf{e}_2 = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}\\), are linearly independent because you can never scale one to look like the other. Their span is the entire 2D Cartesian plane.</p>
      </div>
    `
  },
  {
    number: 'Chapter 2',
    title: 'Matrices and Linear Transformations',
    content: `
      <h3>Matrices as Dynamic Actions</h3>
      <p>Instead of viewing a matrix as just a grid of static data points, think of a matrix as a function that inputs a vector, processes it, and outputs a new vector in a shifted position.</p>
      <div class="definition-box">
        <div class="definition-label">Linear Transformation</div>
        <p>A mapping \\(T: \\mathbb{R}^n \\to \\mathbb{R}^m\\) is a linear transformation if it satisfies two strict rules for all vectors \\(\\mathbf{u}, \\mathbf{v}\\) and scalars \\(c\\):</p>
        <ul>
          <li>\\(T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})\\)</li>
          <li>\\(T(c\\mathbf{u}) = cT(\\mathbf{u})\\)</li>
        </ul>
      </div>
      <h4>Matrix Multiplication as Composition</h4>
      <p>Multiplying a vector by a matrix \\(A\\mathbf{x}\\) executes a transformation. When you multiply two matrices together to get \\(AB\\), you are creating a single matrix that chains those two transformations together back-to-back (composition of functions).</p>
      <h4>Subspaces of a Transformation</h4>
      <p>Every matrix \\(A\\) has two vital hidden internal spaces:</p>
      <ul>
        <li><strong>Column Space (\\(\\text{Col } A\\)):</strong> The span of all columns of \\(A\\). This represents the actual range or destination space of the transformation.</li>
        <li><strong>Null Space (\\(\\text{Null } A\\)):</strong> The collection of all input vectors \\(\\mathbf{x}\\) that get squashed directly into the zero vector: \\(A\\mathbf{x} = \\mathbf{0}\\).</li>
      </ul>
      <div class="example-box">
        <div class="example-label">Geometric Matrix Visual</div>
        <p>Multiplying a vector by \\(\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\) shifts the coordinates by rotating the entire grid exactly 90 degrees counterclockwise around the origin.</p>
      </div>
    `
  },
  {
    number: 'Chapter 3',
    title: 'Systems of Linear Equations and Determinants',
    content: `
      <h3>Solving the Matrix Core: \\(A\\mathbf{x} = \\mathbf{b}\\)</h3>
      <p>The primary computational goal of linear algebra is mapping out intersections of hyperplanes, modeled by the matrix equation \\(A\\mathbf{x} = \\mathbf{b}\\).</p>
      <div class="definition-box">
        <div class="definition-label">Gaussian Elimination & REF</div>
        <p>By executing row operations (scaling, swapping rows, adding rows together), we convert an augmented matrix \\([A \\mid \\mathbf{b}]\\) into Row Echelon Form (REF) to reveal the system variables.</p>
      </div>
      <h4>The Matrix Inverse</h4>
      <p>If a square matrix \\(A\\) is invertible, we can undo its transformation geometric shift entirely. The solution to the system is calculated directly as:</p>
      <div class="math-block highlight">\\(\\mathbf{x} = A^{-1}\\mathbf{b}\\)</div>
      <h4>The Determinant</h4>
      <p>The <strong>determinant</strong>, written as \\(\\det(A)\\) or \\(|A|\\), is a single number that reveals how much a transformation changes the volume of a space. For a simple \\(2 \\times 2\\) matrix, the formula is:</p>
      <div class="math-block">\\(\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc\\)</div>
      <ul>
        <li>If \\(\\det(A) = 0\\), the transformation flattens space completely (compressing a 2D grid down to a 1D line or single point), making the matrix non-invertible.</li>
        <li>If \\(\\det(A) \\neq 0\\), the system has a unique, precise solution.</li>
      </ul>
    `
  },
  {
    number: 'Chapter 4',
    title: 'Eigenvalues, Eigenvectors, and Diagonalization',
    content: `
      <h3>Finding the Unaltered Axes</h3>
      <p>When a matrix transforms space, it usually knocks vectors off their original paths. However, every transformation has special hidden paths called <strong>eigenvectors</strong> that keep their exact orientation—they are only stretched or shrunk.</p>
      <div class="definition-box">
        <div class="definition-label">The Characteristic Equation</div>
        <p>An eigenvector \\(\\mathbf{x}\\) and its scaling factor eigenvalue \\(\\lambda\\) satisfy the equation:</p>
        <div class="math-block highlight">\\(A\\mathbf{x} = \\lambda\\mathbf{x}\\)</div>
        <p>To find the scaling factors without knowing the vectors first, we solve for where the transformed grid flattens out:</p>
        <div class="math-block">\\(\\det(A - \\lambda I) = 0\\)</div>
      </div>
      <h4>Matrix Diagonalization</h4>
      <p>If an \\(n \\times n\\) matrix has \\(n\\) linearly independent eigenvectors, we can pull off a mathematical factorization trick called <strong>diagonalization</strong>:</p>
      <div class="math-block">\\(A = PDP^{-1}\\)</div>
      <p>Where \\(P\\) is a matrix made of the eigenvectors as columns, and \\(D\\) is a pure diagonal matrix containing the eigenvalues. This makes computing huge matrix exponents incredibly simple: \\(A^k = PD^kP^{-1}\\).</p>
      <div class="example-box">
        <div class="example-label">Application</div>
        <p>Diagonalization is the mathematical heartbeat behind Google's original PageRank algorithm and population projection models, allowing computers to process matrix transformations multiplied millions of times instantly.</p>
      </div>
    `
  },
  {
    number: 'Chapter 5',
    title: 'Orthogonality and Singular Value Decomposition',
    content: `
      <h3>Perpendicular Systems and Dimensional Reduction</h3>
      <p>By bringing geometry, length, and perpendicularity into vector spaces, we can build optimal coordinate systems designed for handling messy real-world datasets.</p>
      <div class="definition-box">
        <div class="definition-label">The Dot Product & Orthogonality</div>
        <p>Two vectors are orthogonal (perpendicular) if their algebraic dot product equals zero:</p>
        <div class="math-block">\\(\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\dots + u_nv_n = 0\\)</div>
      </div>
      <h4>Orthogonal Projections</h4>
      <p>If you have an unwieldy high-dimensional vector data point, you can project it cleanly down onto a lower-dimensional subspace \\(W\\). The geometric projection vector is computed as:</p>
      <div class="math-block">\\(\\text{proj}_W \\mathbf{y} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\mathbf{u}_1 + \\dots + \\frac{\\mathbf{y} \\cdot \\mathbf{u}_n}{\\mathbf{u}_n \\cdot \\mathbf{u}_n}\\mathbf{u}_n\\)</div>
      <h4>Singular Value Decomposition (SVD)</h4>
      <p>The crown jewel of linear algebra is the <strong>SVD</strong>. It states that *any* matrix \\(A\\) can be split into three component transformations:</p>
      <div class="math-block highlight">\\(A = U\\Sigma V^T\\)</div>
      <ul>
        <li>\\(U\\): An orthogonal matrix mapping output rotations.</li>
        <li>\\(\\Sigma\\): A diagonal matrix of singular values scaling the primary axes.</li>
        <li>\\(V^T\\): An orthogonal matrix mapping input rotations.</li>
      </ul>
      <p>SVD allows data scientists to strip away noise from data arrays, compress images, and power modern AI recommendation systems by isolating the dominant dimensions of a dataset.</p>
    `
  }
];

const PROBABILITY_CHAPTERS = [
  {
    number: 'Chapter 1',
    title: 'Foundations of Probability & Set Theory',
    content: `
      <h3>Quantifying Randomness</h3>
      <p>Probability is the mathematical language of uncertainty. We map out the space of all possible realities to calculate the likelihood of specific events occurring.</p>
      <div class="definition-box">
        <div class="definition-label">Sample Space and Events</div>
        <p>The <strong>Sample Space</strong> (denoted by \\(\\Omega\\)) is the set of all possible outcomes of a random experiment. An <strong>Event</strong> (\\(A\\)) is a subset of the sample space.</p>
      </div>
      <h4>Kolmogorov's Axioms</h4>
      <p>All probability theory rests on three fundamental mathematical pillars:</p>
      <ul>
        <li>For any event \\(A\\), the probability satisfies: \\(0 \\le P(A) \\le 1\\).</li>
        <li>The probability of the entire sample space occurring is absolute: \\(P(\\Omega) = 1\\).</li>
        <li>If events \\(A\\) and \\(B\\) are mutually exclusive, then: \\(P(A \\cup B) = P(A) + P(B)\\).</li>
      </ul>
      <h4>The Inclusion-Exclusion Principle</h4>
      <p>When two events can happen at the same time, calculating the probability of one or the other requires subtracting their overlapping intersection to avoid double-counting:</p>
      <div class="math-block highlight">\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)</div>
      <div class="example-box">
        <div class="example-label">Example</div>
        <p>If you draw a single card from a standard deck, the probability it is a King (\\(P(K) = 4/52\\)) or a Heart (\\(P(H) = 13/52\\)) is \\(4/52 + 13/52 - 1/52 = 16/52\\), since the King of Hearts is counted in both groups.</p>
      </div>
    `
  },
  {
    number: 'Chapter 2',
    title: 'Conditional Probability & Bayes\' Theorem',
    content: `
      <h3>Updating Likelihood with New Data</h3>
      <p>Probabilities change when we acquire new information. Conditional probability measures the likelihood of an event given that another event has already occurred.</p>
      <div class="definition-box">
        <div class="definition-label">Conditional Probability</div>
        <p>The probability of event \\(A\\) occurring given that event \\(B\\) has occurred is written as \\(P(A|B)\\) and defined as:</p>
        <div class="math-block">\\(P(A|B) = \\frac{P(A \\cap B)}{P(B)}\\quad \\text{where } P(B) > 0\\)</div>
      </div>
      <h4>Statistical Independence</h4>
      <p>Two events are independent if the occurrence of one gives absolutely zero predictive clue about the other. Mathematically, this means: \\(P(A|B) = P(A)\\), which leads to the multiplication rule: \\(P(A \\cap B) = P(A) \\cdot P(B)\\).</p>
      <h4>Bayes' Theorem</h4>
      <p>The absolute cornerstone of modern data classification and medical testing, <strong>Bayes' Theorem</strong> allows us to invert conditional probabilities to calculate the probability of a cause given its observed symptom:</p>
      <div class="math-block highlight">\\(P(A|B) = \\frac{P(B|A)P(A)}{P(B)}\\)</div>
      <div class="example-box">
        <div class="example-label">The Predictive Formula Breakdown</div>
        <p>Expanding the denominator using the Law of Total Probability gives the operational version used in artificial intelligence models:</p>
        <div class="math-block">\\(P(A|B) = \\frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|A^c)P(A^c)}\\)</div>
      </div>
    `
  },
  {
    number: 'Chapter 3',
    title: 'Random Variables & Probability Distributions',
    content: `
      <h3>Mapping Reality to Numbers</h3>
      <p>A <strong>Random Variable</strong> (\\(X\\)) is a function that maps the qualitative outcomes of a sample space directly onto numerical values.</p>
      <h4>Discrete vs. Continuous Variable Functions</h4>
      <ul>
        <li><strong>Discrete:</strong> Has countable gaps between values (e.g., counting coin flips). Modeled by a Probability Mass Function (PMF), where \\(P(X = x)\\) gives direct probabilities.</li>
        <li><strong>Continuous:</strong> Can take any infinite real value in an interval (e.g., measuring precise time or height). Modeled by a Probability Density Function (PDF), \\(f(x)\\), where the probability of a specific point is zero, but areas under the curve represent likelihood intervals: \\(P(a \\le X \\le b) = \\int_a^b f(x)\\,dx\\).</li>
      </ul>
      <div class="definition-box">
        <div class="definition-label">Expected Value & Variance</div>
        <p>The <strong>Expected Value</strong> \\(E[X]\\) is the long-run theoretical average of a random variable. <strong>Variance</strong> \\(\\text{Var}(X)\\) tracks how spread out the data values are from that mean.</p>
      </div>
      <h4>Mathematical Parameters</h4>
      <div class="math-block">
        Discrete Mean: \\(E[X] = \\sum x \\cdot P(X = x)\\)<br>
        Continuous Mean: \\(E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x)\\,dx\\)<br>
        Variance Shortcut: \\(\\text{Var}(X) = E[X^2] - (E[X])^2\\)
      </div>
    `
  },
  {
    number: 'Chapter 4',
    title: 'Classical Distributions & The Central Limit Theorem',
    content: `
      <h3>The Archetypes of Randomness</h3>
      <p>Certain probability patterns recur everywhere in nature, physics, and computer science. We classify these into standardized distributions.</p>
      <h4>The Binomial Distribution</h4>
      <p>Models the number of structural successes in a sequence of \\(n\\) independent True/False trials (like flipping multiple coins), where each success has a flat probability \\(p\\):</p>
      <div class="math-block">\\(P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}\\)</div>
      <h4>The Normal (Gaussian) Distribution</h4>
      <p>The famous "bell curve" that models continuous data centered around an average. It is governed by its mean (\\(\\mu\\)) and standard deviation (\\(\\sigma\\)). To compute positions on a standardized bell curve, we calculate a \\(Z\\)-score:</p>
      <div class="math-block highlight">\\(Z = \\frac{X - \\mu}{\\sigma}\\)</div>
      <div class="definition-box">
        <div class="definition-label">The Central Limit Theorem (CLT)</div>
        <p>The CLT states that if you take sufficiently large random samples from <em>any</em> arbitrary probability distribution, the distribution of the sample means will automatically reshape itself into a perfect Normal Distribution as the sample size grows.</p>
      </div>
      <p>This theorem is the structural bridge that makes modern global inferential statistics possible, allowing us to make highly accurate assertions about massive hidden populations using tiny sample sizes.</p>
    `
  }
];

const DISCRETE_MATH_CHAPTERS = [
  {
    number: 'Chapter 1',
    title: 'Formal Logic and Propositional Calculus',
    content: `
      <h3>The Language of Modern Computing</h3>
      <p>Discrete mathematics skips continuous curves to study structures that are distinctly separated. We begin with <strong>Formal Logic</strong>—the foundational algebra behind binary circuits and programming execution rules.</p>
      <div class="definition-box">
        <div class="definition-label">Logical Propositions</div>
        <p>A proposition is a declarative statement that is strictly either <strong>True (T)</strong> or <strong>False (F)</strong>, never both or in between.</p>
      </div>
      <h4>Core Connectives & Operators</h4>
      <p>We combine propositions using truth functional operators:</p>
      <ul>
        <li><strong>Conjunction (AND):</strong> \\(P \\land Q\\) (True only if both are True)</li>
        <li><strong>Disjunction (OR):</strong> \\(P \\lor Q\\) (True if at least one is True)</li>
        <li><strong>Negation (NOT):</strong> \\(\\neg P\\) (Inverts the truth value)</li>
        <li><strong>Conditional (Implication):</strong> \\(P \\implies Q\\) (False only when \\(P\\) is True and \\(Q\\) is False)</li>
      </ul>
      <h4>De Morgan's Laws</h4>
      <p>Crucial for optimizing software conditions, these laws state how to distribute a negation across logical combinations:</p>
      <div class="math-block highlight">\\(\\neg(P \\land Q) \\iff \\neg P \\lor \\neg Q\\)<br>\\(\\neg(P \\lor Q) \\iff \\neg P \\land \\neg Q\\)</div>
      <div class="example-box">
        <div class="example-label">Logical Equivalences</div>
        <p>The conditional statement \\(P \\implies Q\\) is logically equivalent to its <strong>contrapositive</strong>: \\(\\neg Q \\implies \\neg P\\). They will share identical truth columns in a structural matrix truth table.</p>
      </div>
    `
  },
  {
    number: 'Chapter 2',
    title: 'Set Theory, Relations, and Functions',
    content: `
      <h3>The Architecture of Data Collections</h3>
      <p>Sets are foundational constructs that group individual, well-defined discrete items into single mathematical data objects.</p>
      <div class="definition-box">
        <div class="definition-label">Set Operations</div>
        <p>For any sets \\(A\\) and \\(B\\) inside a universe \\(U\\):</p>
        <ul>
          <li><strong>Intersection:</strong> \\(A \\cap B = \\{x \\in U \\mid x \\in A \\text{ and } x \\in B\\}\\)</li>
          <li><strong>Union:</strong> \\(A \\cup B = \\{x \\in U \\mid x \\in A \\text{ or } x \\in B\\}\\)</li>
          <li><strong>Complement:</strong> \\(A^c = \\{x \\in U \\mid x \\notin A\\}\\)</li>
        </ul>
      </div>
      <h4>Cartesian Products & Relations</h4>
      <p>The Cartesian product \\(A \\times B\\) builds a set of all ordered pairs \\((a,b)\\). A <strong>relation</strong> is simply a subset of this product. A relation is called an <strong>Equivalence Relation</strong> if it satisfies three properties simultaneously:</p>
      <div class="math-block">
        Reflexive: \\(aRa\\) for all \\(a\\)<br>
        Symmetric: \\(aRb \\implies bRa\\)<br>
        Transitive: \\((aRb \\text{ and } bRc) \\implies aRc\\)
      </div>
      <h4>Function Mappings</h4>
      <p>A discrete function maps elements from set \\(A\\) to set \\(B\\). We classify their behavioral structure into three types:</p>
      <ul>
        <li><strong>Injective (One-to-One):</strong> Distinct inputs map to completely distinct outputs.</li>
        <li><strong>Surjective (Onto):</strong> Every single element in destination set \\(B\\) is hit by at least one input from \\(A\\).</li>
        <li><strong>Bijective:</strong> Both injective and surjective. This sets up a perfect 1-to-1 matching, allowing the function to be inverted.</li>
      </ul>
    `
  },
  {
    number: 'Chapter 3',
    title: 'Combinatorics and Counting Principles',
    content: `
      <h3>The Mathematics of Arrangement</h3>
      <p>Combinatorics answers the structural question: <em>How many configurations are possible under a strict set of rules</em>, without spending processing time physically listing them out.</p>
      <div class="definition-box">
        <div class="definition-label">The Pigeonhole Principle</div>
        <p>If \\(n\\) items are put into \\(m\\) containers, and \\(n > m\\), then at least one container must hold more than one item.</p>
      </div>
      <h4>Permutations vs. Combinations</h4>
      <p>When selecting \\(k\\) items out of a pool of size \\(n\\):</p>
      <ul>
        <li><strong>Permutations (Order Matters):</strong> Arrangement configurations where order determines uniqueness (e.g., security codes).</li>
        <li><strong>Combinations (Order Doesn't Matter):</strong> Selection groupings where sequence is irrelevant (e.g., choosing hands of cards).</li>
      </ul>
      <h4>Algorithmic Formulas</h4>
      <div class="math-block highlight">
        Permutations: \\(P(n,k) = \\frac{n!}{(n-k)!}\\)<br>
        Combinations: \\(C(n,k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}\\)
      </div>
      <div class="example-box">
        <div class="example-label">The Binomial Theorem</div>
        <p>Combinatorics dictates how polynomials expand using algebraic combinations coefficients:</p>
        <div class="math-block">\\((x+y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k}y^k\\)</div>
      </div>
    `
  },
  {
    number: 'Chapter 4',
    title: 'Graph Theory and Network Topologies',
    content: `
      <h3>Modeling Connected Frameworks</h3>
      <p>Graphs are abstract networks composed of objects and their connections. They form the foundational basis for map navigation engines, internet routing models, and neural network pipelines.</p>
      <div class="definition-box">
        <div class="definition-label">Formal Graph Definition</div>
        <p>A graph \\(G = (V, E)\\) consists of a set of vertices (nodes) \\(V\\) and a set of edges (connections) \\(E\\) joining pairs of vertices.</p>
      </div>
      <h4>The Handshaking Lemma</h4>
      <p>An underlying mathematical absolute of all undirected graphs states that adding up the degrees (number of connected lines) of every vertex will always equal exactly twice the total number of edges:</p>
      <div class="math-block highlight">\\(\\sum_{v \\in V} \\deg(v) = 2|E|\\)</div>
      <p>As a direct consequence, any arbitrary graph will always contain an even number of vertices that have an odd degree count.</p>
      <h4>Network Paths & Structures</h4>
      <ul>
        <li><strong>Eulerian Path:</strong> A continuous traversal path that visits every single <strong>edge</strong> in the network exactly once.</li>
        <li><strong>Hamiltonian Path:</strong> A traversal path that visits every single <strong>vertex</strong> in the network exactly once.</li>
        <li><strong>Trees:</strong> A highly specialized type of graph that is fully connected but contains absolutely zero structural cycles or closed loops. Trees form the architectural backbone of directory files and sorted database indexing structures.</li>
      </ul>
    `
  }
];

// ===================================
// Topic Configuration
// ===================================

const MATH_TOPICS = [
  {
    id: 'algebra',
    title: 'Algebra',
    tag: 'Equations & Variables',
    color: '#eab308',
    colorRgba: 'rgba(234, 179, 8, 0.35)',
    icon: `<svg viewBox="0 0 44 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><text x="0" y="22" font-size="22" font-family="Georgia,serif" font-style="italic">x+y</text></svg>`,
    chapters: ALGEBRA_CHAPTERS
  },
  {
    id: 'geometry',
    title: 'Geometry',
    tag: 'Shapes & Spaces',
    color: '#22c55e',
    colorRgba: 'rgba(34, 197, 94, 0.35)',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg"><polygon points="20,4 36,36 4,36"/></svg>`,
    chapters: GEOMETRY_CHAPTERS
  },
  {
    id: 'trigonometry',
    title: 'Trigonometry',
    tag: 'Angles & Waves',
    color: '#06b6d4',
    colorRgba: 'rgba(6, 182, 212, 0.35)',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M2,24 Q8,8 14,24 Q20,40 26,24 Q32,8 38,24"/></svg>`,
    chapters: TRIGONOMETRY_CHAPTERS
  },
  {
    id: 'calculus',
    title: 'Calculus',
    tag: 'Change & Motion',
    color: '#f97316',
    colorRgba: 'rgba(249, 115, 22, 0.35)',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M22,5 C19,5 16,9 16,20 C16,31 19,35 22,35 C25,35 28,31 28,20 C28,9 25,5 22,5"/><line x1="11" y1="13" x2="29" y2="13" stroke-width="1.5"/><line x1="11" y1="27" x2="29" y2="27" stroke-width="1.5"/></svg>`,
    chapters: CALCULUS_CHAPTERS
  },
  {
    id: 'linear-algebra',
    title: 'Linear Algebra',
    tag: 'Matrices & Vectors',
    color: '#ec4899',
    colorRgba: 'rgba(236, 72, 153, 0.35)',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M12,6 L9,6 L9,34 L12,34"/><path d="M28,6 L31,6 L31,34 L28,34"/><line x1="14" y1="15" x2="26" y2="15"/><line x1="14" y1="20" x2="26" y2="20"/><line x1="14" y1="25" x2="26" y2="25"/></svg>`,
    chapters: LINEAR_ALGEBRA_CHAPTERS
  },
  {
    id: 'probability',
    title: 'Probability',
    tag: 'Chance & Data',
    color: '#a78bfa',
    colorRgba: 'rgba(167, 139, 250, 0.35)',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="20" r="11"/><circle cx="25" cy="20" r="11"/></svg>`,
    chapters: PROBABILITY_CHAPTERS
  },
  {
    id: 'discrete-math',
    title: 'Discrete Math',
    tag: 'Sets & Logic',
    color: '#14b8a6',
    colorRgba: 'rgba(20, 184, 166, 0.35)',
    icon: `<svg viewBox="0 0 44 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><text x="0" y="24" font-size="18" font-family="Georgia,serif">∈ ∩ ∪</text></svg>`,
    chapters: DISCRETE_MATH_CHAPTERS
  }
];

// ===================================
// Application Class
// ===================================

class MathEncyclopedia {
  constructor() {
    this.currentTopic = null;
    this.currentChapter = 0;
    this.orbitRadius = 220;
    this.nodes = [];
    this.progressStorageKey = 'axiom:last-progress';
    this.maxMathRenderAttempts = 18;
    this.mathRetryDelayMs = 120;
    this.init();
  }

  init() {
    this.createStarField();
    this.adjustOrbitRadius();
    this.createOrbitalNodes();
    this.createConnectionLines();
    this.bindEvents();
    this.hideLoader();
  }

  createStarField() {
    const container = document.getElementById('starField');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
      star.style.animationDelay = `${Math.random() * 4}s`;
      const size = `${1 + Math.random() * 2}px`;
      star.style.width = size;
      star.style.height = size;
      container.appendChild(star);
    }
  }

  adjustOrbitRadius() {
    const min = Math.min(window.innerWidth, window.innerHeight);
    this.orbitRadius = Math.max(200, Math.min(340, min * 0.38));
  }

  createOrbitalNodes() {
    const container = document.getElementById('orbitalContainer');
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    MATH_TOPICS.forEach((topic, i) => {
      const angle = (i / MATH_TOPICS.length) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(angle) * this.orbitRadius;
      const y = cy + Math.sin(angle) * this.orbitRadius;

      const node = document.createElement('div');
      node.className = 'orbital-node';
      node.dataset.topicId = topic.id;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.tabIndex = 0;
      node.setAttribute('role', 'button');
      node.setAttribute('aria-label', `Open ${topic.title}`);
      node.style.setProperty('--orb-color', topic.color);
      node.style.setProperty('--orb-glow', topic.colorRgba);
      node.style.setProperty('--orb-bg', this.darkenColor(topic.color));
      // Staggered entrance: each node appears 80ms after the previous
      node.style.animationDelay = `${0.3 + i * 0.08}s`;
      // Each orb floats at a slightly different speed/phase
      node.style.setProperty('--float-duration', `${4.5 + i * 0.4}s`);
      node.style.setProperty('--float-delay', `${i * 0.6}s`);

      node.innerHTML = `
        <div class="orb-container">
          <div class="orb-ring"></div>
          <div class="orb-core">
            <div class="orb-icon">${topic.icon}</div>
          </div>
          <div class="orb-label">
            <div class="orb-title">${topic.title}</div>
            <div class="orb-tag">${topic.tag}</div>
          </div>
        </div>
      `;

      container.appendChild(node);
      this.nodes.push({ element: node, x, y, topic });
    });
  }

  createConnectionLines() {
    const svg = document.getElementById('connectionLines');
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    // Remove old lines only, keep the orbit-track circle
    svg.querySelectorAll('.connection-line').forEach(el => el.remove());

    // Update orbit track ring
    const track = document.getElementById('orbitTrack');
    if (track) {
      track.setAttribute('cx', cx);
      track.setAttribute('cy', cy);
      track.setAttribute('r', this.orbitRadius);
    }

    this.nodes.forEach(node => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.classList.add('connection-line');
      line.setAttribute('x1', cx);
      line.setAttribute('y1', cy);
      line.setAttribute('x2', node.x);
      line.setAttribute('y2', node.y);
      line.dataset.nodeId = node.topic.id;
      svg.appendChild(line);
    });
  }

  bindEvents() {
    document.querySelectorAll('.orbital-node').forEach(node => {
      node.addEventListener('click', e => this.openTopic(e.currentTarget.dataset.topicId));
      node.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openTopic(e.currentTarget.dataset.topicId);
        }
      });
      node.addEventListener('mouseenter', e => this.setLineGlow(e.currentTarget.dataset.topicId, true));
      node.addEventListener('mouseleave', e => this.setLineGlow(e.currentTarget.dataset.topicId, false));
    });

    document.getElementById('backButton').addEventListener('click', () => this.closePanel());
    document.getElementById('prevChapter').addEventListener('click', () => this.navigateChapter(-1));
    document.getElementById('nextChapter').addEventListener('click', () => this.navigateChapter(1));

    window.addEventListener('resize', () => {
      this.adjustOrbitRadius();
      this.repositionNodes();
    });

    document.addEventListener('keydown', e => {
      if (!this.currentTopic) return;
      if (e.key === 'Escape') this.closePanel();
      if (e.key === 'ArrowLeft') this.navigateChapter(-1);
      if (e.key === 'ArrowRight') this.navigateChapter(1);
    });
  }

  setLineGlow(topicId, active) {
    const line = document.querySelector(`.connection-line[data-node-id="${topicId}"]`);
    if (!line) return;
    const topic = MATH_TOPICS.find(t => t.id === topicId);
    if (active) {
      line.style.stroke = topic.color;
      line.style.strokeWidth = '2';
      line.style.filter = `drop-shadow(0 0 6px ${topic.color})`;
      line.style.opacity = '0.9';
    } else {
      line.style.stroke = '';
      line.style.strokeWidth = '';
      line.style.filter = '';
      line.style.opacity = '';
    }
  }

  openTopic(topicId, options = {}) {
    const topic = MATH_TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    this.currentTopic = topic;
    const preferredChapter = Number.isInteger(options.chapterIndex) ? options.chapterIndex : 0;
    this.currentChapter = Math.max(0, Math.min(preferredChapter, topic.chapters.length - 1));

    const panel = document.getElementById('contentPanel');
    panel.style.setProperty('--panel-color', topic.color);
    document.getElementById('panelTitle').textContent = topic.title;
    document.getElementById('panelSubtitle').textContent = topic.tag;

    this.renderChapter();
    document.getElementById('hubView').classList.add('hidden');
    panel.classList.add('active');
  }

  closePanel() {
    this.saveProgress();
    document.getElementById('contentPanel').classList.remove('active');
    document.getElementById('hubView').classList.remove('hidden');
    this.currentTopic = null;
    this.currentChapter = 0;
  }

  navigateChapter(dir) {
    if (!this.currentTopic) return;
    const next = this.currentChapter + dir;
    if (next >= 0 && next < this.currentTopic.chapters.length) {
      this.currentChapter = next;
      this.renderChapter();
    }
  }

  renderChapter() {
    const chapter = this.currentTopic.chapters[this.currentChapter];
    document.getElementById('panelContent').innerHTML = `
      <div class="chapter">
        <header class="chapter-header">
          <div class="chapter-number">${chapter.number}</div>
          <h2 class="chapter-title">${chapter.title}</h2>
        </header>
        <div class="chapter-body">${chapter.content}</div>
      </div>
    `;
    this.updateChapterNav();
    this.saveProgress();
    this.renderMath();
    document.getElementById('panelContent').scrollTop = 0;
  }

  updateChapterNav() {
    const total = this.currentTopic.chapters.length;
    document.getElementById('chapterProgress').textContent = `${this.currentChapter + 1} / ${total}`;
    document.getElementById('prevChapter').disabled = this.currentChapter === 0;
    document.getElementById('nextChapter').disabled = this.currentChapter >= total - 1;
  }

  renderMath() {
    let attempts = 0;
    const tryRender = () => {
      if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(document.getElementById('panelContent'), {
          delimiters: [
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
        return;
      }
      attempts += 1;
      if (attempts <= this.maxMathRenderAttempts) {
        setTimeout(tryRender, this.mathRetryDelayMs);
      }
    };
    tryRender();
  }

  getSavedProgress() {
    try {
      const raw = localStorage.getItem(this.progressStorageKey);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed.topicId !== 'string' || typeof parsed.chapter !== 'number') return null;
      return parsed;
    } catch (error) {
      return null;
    }
  }

  saveProgress() {
    if (!this.currentTopic) return;
    try {
      localStorage.setItem(this.progressStorageKey, JSON.stringify({
        topicId: this.currentTopic.id,
        chapter: this.currentChapter
      }));
    } catch (error) {
      // Ignore storage write failures (private browsing, quota issues, etc.)
    }
  }

  resumeProgress() {
    const saved = this.getSavedProgress();
    if (!saved) return;
    this.openTopic(saved.topicId, { chapterIndex: saved.chapter });
  }

  repositionNodes() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    this.nodes.forEach((node, i) => {
      const angle = (i / this.nodes.length) * Math.PI * 2 - Math.PI / 2;
      node.x = cx + Math.cos(angle) * this.orbitRadius;
      node.y = cy + Math.sin(angle) * this.orbitRadius;
      node.element.style.left = `${node.x}px`;
      node.element.style.top = `${node.y}px`;
    });

    this.createConnectionLines();
  }

  darkenColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${Math.floor(r * 0.12)}, ${Math.floor(g * 0.12)}, ${Math.floor(b * 0.12)}, 0.95)`;
  }

  hideLoader() {
    document.getElementById('loadingOverlay').classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MathEncyclopedia();
});
