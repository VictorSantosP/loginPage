import { Ca as ɵɵconditional, Dc as Injector, Do as ɵɵgetCurrentView, Ec as InjectionToken, El as ɵɵdefineInjectable, En as ElementRef, Fl as ɵɵresetView, Fn as Injectable, Il as ɵɵrestoreView, Ks as ɵɵtextInterpolate1, M as createComponent, Ta as ɵɵconditionalCreate, Wc as SecurityContext, Wi as setClassMetadata, Ws as ɵɵtext, Yo as ɵɵlistener, Zo as ɵɵnextContext, an as ChangeDetectionStrategy, ba as ɵɵclassMap, cn as Component, da as ɵɵadvance, do as ɵɵdomElementEnd, fo as ɵɵdomElementStart, ks as ɵɵsanitizeHtml, lo as ɵɵdomElementContainerEnd, mc as DOCUMENT, mo as ɵɵdomProperty, no as ɵɵdefineDirective, pl as makeEnvironmentProviders, po as ɵɵdomListener, sl as inject, so as ɵɵdomElement, tn as ApplicationRef, to as ɵɵdefineComponent, uo as ɵɵdomElementContainerStart, wn as Directive, xa as ɵɵclassProp, xl as signal, ya as ɵɵattribute, zs as ɵɵstyleProp } from "./core-clzGvzSz.js";
import { Qn as Subject } from "./esm5-ChK3bs0s.js";
import "./common-CMle8hE0.js";
import { r as DomSanitizer } from "./platform-browser-Bq76QZM0.js";
//#region node_modules/@iqx-limited/ngx-toastr/fesm2022/iqx-limited-ngx-toastr.mjs
function ToastComponent_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵdomElementStart(0, "button", 2);
		ɵɵdomListener("click", function ToastComponent_Conditional_0_Template_button_click_0_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().remove());
		});
		ɵɵdomElementStart(1, "span", 3);
		ɵɵtext(2, "×");
		ɵɵdomElementEnd()();
	}
}
function ToastComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementContainerStart(0);
		ɵɵtext(1);
		ɵɵdomElementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵtextInterpolate1(" [", ctx_r1.duplicatesCount + 1, "] ");
	}
}
function ToastComponent_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "div");
		ɵɵtext(1);
		ɵɵconditionalCreate(2, ToastComponent_Conditional_1_Conditional_2_Template, 2, 1, "ng-container");
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵclassMap(ctx_r1.options.titleClass);
		ɵɵattribute("aria-label", ctx_r1.title);
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r1.title, " ");
		ɵɵadvance();
		ɵɵconditional(ctx_r1.duplicatesCount ? 2 : -1);
	}
}
function ToastComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵdomElement(0, "div", 6);
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵclassMap(ctx_r1.options.messageClass);
		ɵɵdomProperty("innerHTML", ctx_r1.message, ɵɵsanitizeHtml);
	}
}
function ToastComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "div", 7);
		ɵɵtext(1);
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵclassMap(ctx_r1.options.messageClass);
		ɵɵattribute("aria-label", ctx_r1.message);
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r1.message, " ");
	}
}
function ToastComponent_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵconditionalCreate(0, ToastComponent_Conditional_2_Conditional_0_Template, 1, 3, "div", 4)(1, ToastComponent_Conditional_2_Conditional_1_Template, 2, 4, "div", 5);
	if (rf & 2) ɵɵconditional(ɵɵnextContext().options.enableHtml ? 0 : 1);
}
function ToastComponent_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "div");
		ɵɵdomElement(1, "div", 8);
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵstyleProp("width", ctx_r1.width() + "%");
	}
}
function ToastNoAnimationComponent_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵdomElementStart(0, "button", 2);
		ɵɵdomListener("click", function ToastNoAnimationComponent_Conditional_0_Template_button_click_0_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().remove());
		});
		ɵɵdomElementStart(1, "span", 3);
		ɵɵtext(2, "×");
		ɵɵdomElementEnd()();
	}
}
function ToastNoAnimationComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementContainerStart(0);
		ɵɵtext(1);
		ɵɵdomElementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵtextInterpolate1(" [", ctx_r1.duplicatesCount + 1, "] ");
	}
}
function ToastNoAnimationComponent_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "div")(1, "span");
		ɵɵtext(2);
		ɵɵconditionalCreate(3, ToastNoAnimationComponent_Conditional_1_Conditional_3_Template, 2, 1, "ng-container");
		ɵɵdomElementEnd()();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵclassMap(ctx_r1.options.titleClass);
		ɵɵattribute("aria-label", ctx_r1.title);
		ɵɵadvance(2);
		ɵɵtextInterpolate1(" ", ctx_r1.title, " ");
		ɵɵadvance();
		ɵɵconditional(ctx_r1.duplicatesCount ? 3 : -1);
	}
}
function ToastNoAnimationComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵdomElement(0, "div", 6);
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵclassMap(ctx_r1.options.messageClass);
		ɵɵdomProperty("innerHTML", ctx_r1.message, ɵɵsanitizeHtml);
	}
}
function ToastNoAnimationComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "div", 7);
		ɵɵtext(1);
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵclassMap(ctx_r1.options.messageClass);
		ɵɵattribute("aria-label", ctx_r1.message);
		ɵɵadvance();
		ɵɵtextInterpolate1(" ", ctx_r1.message, " ");
	}
}
function ToastNoAnimationComponent_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵconditionalCreate(0, ToastNoAnimationComponent_Conditional_2_Conditional_0_Template, 1, 3, "div", 4)(1, ToastNoAnimationComponent_Conditional_2_Conditional_1_Template, 2, 4, "div", 5);
	if (rf & 2) ɵɵconditional(ɵɵnextContext().options.enableHtml ? 0 : 1);
}
function ToastNoAnimationComponent_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "div");
		ɵɵdomElement(1, "div", 8);
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵstyleProp("width", ctx_r1.width() + "%");
	}
}
var ToastContainerDirective = class ToastContainerDirective {
	el = inject(ElementRef);
	getContainerElement() {
		return this.el.nativeElement;
	}
	static ɵfac = function ToastContainerDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ToastContainerDirective)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: ToastContainerDirective,
		exportAs: ["toastContainer"]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerDirective, [{
		type: Directive,
		args: [{
			standalone: true,
			exportAs: "toastContainer"
		}]
	}], null, null);
})();
/**
* Everything a toast needs to launch
*/
var ToastPackage = class {
	toastId;
	config;
	message;
	title;
	toastType;
	toastRef;
	onTap = new Subject();
	onAction = new Subject();
	constructor(toastId, config, message, title, toastType, toastRef) {
		this.toastId = toastId;
		this.config = config;
		this.message = message;
		this.title = title;
		this.toastType = toastType;
		this.toastRef = toastRef;
		this.toastRef.afterClosedObservable().subscribe(() => {
			this.onAction.complete();
			this.onTap.complete();
		});
	}
	/** Fired on click */
	triggerTap() {
		this.onTap.next();
		if (this.config.tapToDismiss) this.onTap.complete();
	}
	onTapObservable() {
		return this.onTap.asObservable();
	}
	/** available for use in custom toast */
	triggerAction(action) {
		this.onAction.next(action);
	}
	onActionObservable() {
		return this.onAction.asObservable();
	}
};
var DefaultNoComponentGlobalConfig = {
	maxOpened: 0,
	autoDismiss: false,
	newestOnTop: true,
	preventDuplicates: false,
	countDuplicates: false,
	resetTimeoutOnDuplicate: false,
	includeTitleDuplicates: false,
	iconClasses: {
		error: "toast-error",
		info: "toast-info",
		success: "toast-success",
		warning: "toast-warning"
	},
	closeButton: false,
	disableTimeOut: false,
	timeOut: 5e3,
	extendedTimeOut: 1e3,
	enableHtml: false,
	progressBar: false,
	toastClass: "ngx-toastr",
	positionClass: "toast-top-right",
	titleClass: "toast-title",
	messageClass: "toast-message",
	easing: "ease-in",
	easeTime: 300,
	tapToDismiss: true,
	onActivateTick: false,
	progressAnimation: "decreasing"
};
var TOAST_CONFIG = new InjectionToken("ToastConfig");
/**
* A `ComponentPortal` is a portal that instantiates some Component upon attachment.
*/
var ComponentPortal = class {
	/** The type of the component that will be instantiated for attachment. */
	component;
	/**
	* [Optional] Where the attached component should live in Angular's *logical* component tree.
	* This is different from where the component *renders*, which is determined by the PortalHost.
	* The origin necessary when the host is outside of the Angular application context.
	*/
	viewContainerRef;
	/** Injector used for the instantiation of the component. */
	injector;
	attachedHost;
	constructor(component, injector) {
		this.component = component;
		this.injector = injector;
	}
	/** Whether this portal is attached to a host. */
	get isAttached() {
		return this.attachedHost != null;
	}
	/** Attach this portal to a host. */
	attach(host, newestOnTop) {
		this.attachedHost = host;
		return host.attach(this, newestOnTop);
	}
	/** Detach this portal from its host */
	detach() {
		const host = this.attachedHost;
		if (host) {
			this.attachedHost = void 0;
			return host.detach();
		}
	}
	/**
	* Sets the PortalHost reference without performing `attach ( )`. This is used directly by
	* the PortalHost when it is performing an `attach ( )` or `detach ( )`.
	*/
	setAttachedHost(host) {
		this.attachedHost = host;
	}
};
/**
* Partial implementation of PortalHost that only deals with attaching a
* ComponentPortal
*/
var BasePortalHost = class {
	/** The portal currently attached to the host. */
	attachedPortal;
	/** A function that will permanently dispose this host. */
	disposeFn;
	attach(portal, newestOnTop) {
		this.attachedPortal = portal;
		return this.attachComponentPortal(portal, newestOnTop);
	}
	detach() {
		if (this.attachedPortal) this.attachedPortal.setAttachedHost();
		this.attachedPortal = void 0;
		if (this.disposeFn) {
			this.disposeFn();
			this.disposeFn = void 0;
		}
	}
	setDisposeFn(fn) {
		this.disposeFn = fn;
	}
};
/**
* A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
* application context.
*
* This is the only part of the portal core that directly touches the DOM.
*/
var DomPortalHost = class extends BasePortalHost {
	_hostDomElement;
	_appRef;
	constructor(_hostDomElement, _appRef) {
		super();
		this._hostDomElement = _hostDomElement;
		this._appRef = _appRef;
	}
	/**
	* Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
	* @param portal Portal to be attached
	*/
	attachComponentPortal(portal, newestOnTop) {
		const componentRef = createComponent(portal.component, {
			environmentInjector: this._appRef.injector,
			elementInjector: portal.injector
		});
		this._appRef.attachView(componentRef.hostView);
		this.setDisposeFn(() => {
			this._appRef.detachView(componentRef.hostView);
			componentRef.destroy();
		});
		if (newestOnTop) this._hostDomElement.insertBefore(this.getComponentRootNode(componentRef), this._hostDomElement.firstChild);
		else this._hostDomElement.appendChild(this.getComponentRootNode(componentRef));
		return componentRef;
	}
	/** Gets the root HTMLElement for an instantiated component. */
	getComponentRootNode(componentRef) {
		return componentRef.hostView.rootNodes[0];
	}
};
/** Container inside which all toasts will render. */
var OverlayContainer = class OverlayContainer {
	document = inject(DOCUMENT);
	containerElement;
	ngOnDestroy() {
		if (this.containerElement && this.containerElement.parentNode) this.containerElement.parentNode.removeChild(this.containerElement);
	}
	/**
	* This method returns the overlay container element. It will lazily
	* create the element the first time  it is called to facilitate using
	* the container in non-browser environments.
	* @returns the container element
	*/
	getContainerElement() {
		if (!this.containerElement) this.createContainer();
		return this.containerElement;
	}
	/**
	* Create the overlay container element, which is simply a div
	* with the 'cdk-overlay-container' class on the document body
	* and 'aria-live="polite"'
	*/
	createContainer() {
		const container = this.document.createElement("div");
		container.classList.add("overlay-container");
		container.setAttribute("aria-live", "polite");
		this.document.body.appendChild(container);
		this.containerElement = container;
	}
	static ɵfac = function OverlayContainer_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || OverlayContainer)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: OverlayContainer,
		factory: OverlayContainer.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
/**
* Reference to an overlay that has been created with the Overlay service.
* Used to manipulate or dispose of said overlay.
*/
var OverlayRef = class {
	_portalHost;
	constructor(_portalHost) {
		this._portalHost = _portalHost;
	}
	attach(portal, newestOnTop = true) {
		return this._portalHost.attach(portal, newestOnTop);
	}
	/**
	* Detaches an overlay from a portal.
	* @returns Resolves when the overlay has been detached.
	*/
	detach() {
		return this._portalHost.detach();
	}
};
/**
* Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
* used as a low-level building building block for other components. Dialogs, tooltips, menus,
* selects, etc. can all be built using overlays. The service should primarily be used by authors
* of re-usable components rather than developers building end-user applications.
*
* An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
*/
var Overlay = class Overlay {
	overlayContainer = inject(OverlayContainer);
	appRef = inject(ApplicationRef);
	document = inject(DOCUMENT);
	paneElements = /* @__PURE__ */ new Map();
	/**
	* Creates an overlay.
	* @returns A reference to the created overlay.
	*/
	create(positionClass, overlayContainer) {
		return this.createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
	}
	getPaneElement(positionClass = "", overlayContainer) {
		if (!this.paneElements.get(overlayContainer)) this.paneElements.set(overlayContainer, {});
		if (!this.paneElements.get(overlayContainer)[positionClass]) this.paneElements.get(overlayContainer)[positionClass] = this.createPaneElement(positionClass, overlayContainer);
		return this.paneElements.get(overlayContainer)[positionClass];
	}
	/**
	* Creates the DOM element for an overlay and appends it to the overlay container.
	* @returns Newly-created pane element
	*/
	createPaneElement(positionClass, overlayContainer) {
		const pane = this.document.createElement("div");
		pane.id = "toast-container";
		pane.classList.add(positionClass);
		pane.classList.add("toast-container");
		if (!overlayContainer) this.overlayContainer.getContainerElement().appendChild(pane);
		else overlayContainer.getContainerElement().appendChild(pane);
		return pane;
	}
	/**
	* Create a DomPortalHost into which the overlay content can be loaded.
	* @param pane The DOM element to turn into a portal host.
	* @returns A portal host for the given DOM element.
	*/
	createPortalHost(pane) {
		return new DomPortalHost(pane, this.appRef);
	}
	/**
	* Creates an OverlayRef for an overlay in the given DOM element.
	* @param pane DOM element for the overlay
	*/
	createOverlayRef(pane) {
		return new OverlayRef(this.createPortalHost(pane));
	}
	static ɵfac = function Overlay_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Overlay)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: Overlay,
		factory: Overlay.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
/**
* Reference to a toast opened via the Toastr service.
*/
var ToastRef = class {
	overlayRef;
	/** The instance of component opened into the toast. */
	componentInstance;
	/** Count of duplicates of this toast */
	duplicatesCount = 0;
	/** Subject for notifying the user that the toast has finished closing. */
	afterClosed = new Subject();
	/** triggered when toast is activated */
	activate = new Subject();
	/** notifies the toast that it should close before the timeout */
	manualClose = new Subject();
	/** notifies the toast that it should reset the timeouts */
	resetTimeout = new Subject();
	/** notifies the toast that it should count a duplicate toast */
	countDuplicate = new Subject();
	constructor(overlayRef) {
		this.overlayRef = overlayRef;
	}
	manualCloseComplete() {
		this.manualClose.next();
		this.manualClose.complete();
	}
	manualClosed() {
		return this.manualClose.asObservable();
	}
	timeoutReset() {
		return this.resetTimeout.asObservable();
	}
	countDuplicateObservable() {
		return this.countDuplicate.asObservable();
	}
	/**
	* Close the toast.
	*/
	close() {
		this.overlayRef.detach();
		this.afterClosed.next();
		this.manualClose.next();
		this.afterClosed.complete();
		this.manualClose.complete();
		this.activate.complete();
		this.resetTimeout.complete();
		this.countDuplicate.complete();
	}
	/** Gets an observable that is notified when the toast is finished closing. */
	afterClosedObservable() {
		return this.afterClosed.asObservable();
	}
	isInactive() {
		return this.activate.closed;
	}
	activateComplete() {
		this.activate.next();
		this.activate.complete();
	}
	/** Gets an observable that is notified when the toast has started opening. */
	afterActivate() {
		return this.activate.asObservable();
	}
	/** Reset the toast timouts and count duplicates */
	onDuplicate(resetTimeout, countDuplicate) {
		if (resetTimeout) this.resetTimeout.next();
		if (countDuplicate) this.countDuplicate.next(++this.duplicatesCount);
	}
};
var ToastrService = class ToastrService {
	toastrConfig;
	currentlyActive = 0;
	toasts = [];
	overlayContainer;
	previousToastMessage;
	token = inject(TOAST_CONFIG);
	overlay = inject(Overlay);
	sanitizer = inject(DomSanitizer);
	injector = inject(Injector);
	index = 0;
	constructor() {
		this.toastrConfig = {
			...this.token.default,
			...this.token.config
		};
		if (this.token.config.iconClasses) this.toastrConfig.iconClasses = {
			...this.token.default.iconClasses,
			...this.token.config.iconClasses
		};
	}
	/** show toast */
	show(message, title, override = {}, type = "") {
		return this.preBuildNotification(type, message, title, this.applyConfig(override));
	}
	/** show successful toast */
	success(message, title, override = {}) {
		const type = this.toastrConfig.iconClasses.success || "";
		return this.preBuildNotification(type, message, title, this.applyConfig(override));
	}
	/** show error toast */
	error(message, title, override = {}) {
		const type = this.toastrConfig.iconClasses.error || "";
		return this.preBuildNotification(type, message, title, this.applyConfig(override));
	}
	/** show info toast */
	info(message, title, override = {}) {
		const type = this.toastrConfig.iconClasses.info || "";
		return this.preBuildNotification(type, message, title, this.applyConfig(override));
	}
	/** show warning toast */
	warning(message, title, override = {}) {
		const type = this.toastrConfig.iconClasses.warning || "";
		return this.preBuildNotification(type, message, title, this.applyConfig(override));
	}
	/**
	* Remove all or a single toast by id
	*/
	clear(toastId) {
		for (const toast of this.toasts) if (toastId !== void 0) {
			if (toast.toastId === toastId) {
				toast.toastRef.manualCloseComplete();
				return;
			}
		} else toast.toastRef.manualCloseComplete();
	}
	/**
	* Remove and destroy a single toast by id
	*/
	remove(toastId) {
		const found = this.findToast(toastId);
		if (!found) return false;
		found.activeToast.toastRef.close();
		this.toasts.splice(found.index, 1);
		this.currentlyActive = this.currentlyActive - 1;
		if (!this.toastrConfig.maxOpened || !this.toasts.length) return false;
		if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
			const p = this.toasts[this.currentlyActive].toastRef;
			if (!p.isInactive()) {
				this.currentlyActive = this.currentlyActive + 1;
				p.activateComplete();
			}
		}
		return true;
	}
	/**
	* Determines if toast message is already shown
	*/
	findDuplicate(title = "", message = "", resetOnDuplicate, countDuplicates) {
		const { includeTitleDuplicates } = this.toastrConfig;
		for (const toast of this.toasts) {
			const hasDuplicateTitle = includeTitleDuplicates && toast.title === title;
			if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
				toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
				return toast;
			}
		}
		return null;
	}
	/** create a clone of global config and apply individual settings */
	applyConfig(override = {}) {
		return {
			...this.toastrConfig,
			...override
		};
	}
	/**
	* Find toast object by id
	*/
	findToast(toastId) {
		for (let i = 0; i < this.toasts.length; i++) if (this.toasts[i].toastId === toastId) return {
			index: i,
			activeToast: this.toasts[i]
		};
		return null;
	}
	/**
	* Determines the need to run inside angular's zone then builds the toast
	*/
	preBuildNotification(toastType, message, title, config) {
		return this.buildNotification(toastType, message, title, config);
	}
	/**
	* Creates and attaches toast data to component
	* returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
	*/
	buildNotification(toastType, message, title, config) {
		if (!config.toastComponent) throw new Error("toastComponent required");
		const duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);
		if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) return duplicate;
		this.previousToastMessage = message;
		let keepInactive = false;
		if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
			keepInactive = true;
			if (this.toastrConfig.autoDismiss) this.clear(this.toasts[0].toastId);
		}
		const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
		this.index = this.index + 1;
		let sanitizedMessage = message;
		if (message && config.enableHtml) sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
		const toastRef = new ToastRef(overlayRef);
		const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
		/** New injector that contains an instance of `ToastPackage`. */
		const providers = [{
			provide: ToastPackage,
			useValue: toastPackage
		}];
		const toastInjector = Injector.create({
			providers,
			parent: this.injector
		});
		const component = new ComponentPortal(config.toastComponent, toastInjector);
		const portal = overlayRef.attach(component, config.newestOnTop);
		toastRef.componentInstance = portal.instance;
		const ins = {
			toastId: this.index,
			title: title || "",
			message: message || "",
			toastRef,
			onShown: toastRef.afterActivate(),
			onHidden: toastRef.afterClosedObservable(),
			onTap: toastPackage.onTapObservable(),
			onAction: toastPackage.onActionObservable(),
			portal
		};
		if (!keepInactive) {
			this.currentlyActive = this.currentlyActive + 1;
			setTimeout(() => {
				ins.toastRef.activateComplete();
			});
		}
		this.toasts.push(ins);
		return ins;
	}
	static ɵfac = function ToastrService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ToastrService)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ToastrService,
		factory: ToastrService.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
var ToastComponent = class ToastComponent {
	message;
	title;
	options;
	duplicatesCount;
	originalTimeout;
	/** width of progress bar has increased- */
	width = signal(-1, ...ngDevMode ? [{ debugName: "width" }] : 	/* istanbul ignore next */ []);
	state;
	toastPackage = inject(ToastPackage);
	toastrService = inject(ToastrService);
	timeout;
	intervalId;
	hideTime;
	sub;
	sub1;
	sub2;
	sub3;
	constructor() {
		this.message = this.toastPackage.message;
		this.title = this.toastPackage.title;
		this.options = this.toastPackage.config;
		this.originalTimeout = this.toastPackage.config.timeOut;
		this.sub = this.toastPackage.toastRef.afterActivate().subscribe(() => {
			this.activateToast();
		});
		this.sub1 = this.toastPackage.toastRef.manualClosed().subscribe(() => {
			this.remove();
		});
		this.sub2 = this.toastPackage.toastRef.timeoutReset().subscribe(() => {
			this.resetTimeout();
		});
		this.sub3 = this.toastPackage.toastRef.countDuplicateObservable().subscribe((count) => {
			this.duplicatesCount = count;
		});
		this.state = signal({
			value: "inactive",
			params: {
				easeTime: this.toastPackage.config.easeTime,
				easing: "ease-in"
			}
		}, ...ngDevMode ? [{ debugName: "state" }] : 		/* istanbul ignore next */ []);
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
		this.sub1.unsubscribe();
		this.sub2.unsubscribe();
		this.sub3.unsubscribe();
		clearInterval(this.intervalId);
		clearTimeout(this.timeout);
	}
	/**
	* activates toast and sets timeout
	*/
	activateToast() {
		this.state.set({
			...this.state(),
			value: "active"
		});
		if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
			this.timeout = setTimeout(() => this.remove(), this.options.timeOut);
			this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
			if (this.options.progressBar) this.intervalId = setInterval(() => this.updateProgress(), 10);
		}
	}
	/**
	* updates progress bar width
	*/
	updateProgress() {
		if (this.width() === 0 || this.width() === 100 || !this.options.timeOut) return;
		const now = (/* @__PURE__ */ new Date()).getTime();
		const remaining = this.hideTime - now;
		this.width.set(remaining / this.options.timeOut * 100);
		if (this.options.progressAnimation === "increasing") this.width.update((width) => 100 - width);
		if (this.width() <= 0) this.width.set(0);
		if (this.width() >= 100) this.width.set(100);
	}
	resetTimeout() {
		clearTimeout(this.timeout);
		clearInterval(this.intervalId);
		this.state.set({
			...this.state(),
			value: "active"
		});
		this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
		this.options.timeOut = this.originalTimeout;
		this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
		this.width.set(-1);
		if (this.options.progressBar) this.intervalId = setInterval(() => this.updateProgress(), 10);
	}
	/**
	* tells toastrService to remove this toast after animation time
	*/
	remove() {
		if (this.state().value === "removed") return;
		clearTimeout(this.timeout);
		this.state.set({
			...this.state(),
			value: "removed"
		});
		this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime);
	}
	/**
	* Handles click/tap on the toast.
	*/
	tapToast() {
		if (this.state().value === "removed") return;
		this.toastPackage.triggerTap();
		if (this.options.tapToDismiss) this.remove();
	}
	/**
	* Handles mouseenter to stick the toast around.
	*/
	stickAround() {
		if (this.state().value === "removed") return;
		if (this.options.disableTimeOut !== "extendedTimeOut") {
			clearTimeout(this.timeout);
			this.options.timeOut = 0;
			this.hideTime = 0;
			clearInterval(this.intervalId);
			this.width.set(0);
		}
	}
	/**
	* Handles mouseleave to delay hiding the toast.
	*/
	delayedHideToast() {
		if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state().value === "removed") return;
		this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
		this.options.timeOut = this.options.extendedTimeOut;
		this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
		this.width.set(-1);
		if (this.options.progressBar) this.intervalId = setInterval(() => this.updateProgress(), 10);
	}
	static ɵfac = function ToastComponent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ToastComponent)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: ToastComponent,
		selectors: [["app-toast-component"]],
		hostVars: 10,
		hostBindings: function ToastComponent_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function ToastComponent_click_HostBindingHandler() {
				return ctx.tapToast();
			})("mouseenter", function ToastComponent_mouseenter_HostBindingHandler() {
				return ctx.stickAround();
			})("mouseleave", function ToastComponent_mouseleave_HostBindingHandler() {
				return ctx.delayedHideToast();
			});
			if (rf & 2) {
				ɵɵclassMap(ctx.toastPackage.toastType + " " + ctx.toastPackage.config.toastClass);
				ɵɵstyleProp("--%NS%ease-time", ctx.state().params.easeTime, "ms")("--%NS%easing", ctx.state().params.easing);
				ɵɵclassProp("active", ctx.state().value === "active")("removed", ctx.state().value === "removed");
			}
		},
		decls: 4,
		vars: 4,
		consts: [
			[
				"type",
				"button",
				"aria-label",
				"Close",
				1,
				"toast-close-button"
			],
			[3, "class"],
			[
				"type",
				"button",
				"aria-label",
				"Close",
				1,
				"toast-close-button",
				3,
				"click"
			],
			["aria-hidden", "true"],
			[
				"role",
				"alert",
				3,
				"class",
				"innerHTML"
			],
			[
				"role",
				"alert",
				3,
				"class"
			],
			[
				"role",
				"alert",
				3,
				"innerHTML"
			],
			["role", "alert"],
			[1, "toast-progress"]
		],
		template: function ToastComponent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵconditionalCreate(0, ToastComponent_Conditional_0_Template, 3, 0, "button", 0);
				ɵɵconditionalCreate(1, ToastComponent_Conditional_1_Template, 3, 5, "div", 1);
				ɵɵconditionalCreate(2, ToastComponent_Conditional_2_Template, 2, 1);
				ɵɵconditionalCreate(3, ToastComponent_Conditional_3_Template, 2, 2, "div");
			}
			if (rf & 2) {
				ɵɵconditional(ctx.options.closeButton ? 0 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx.title ? 1 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx.message ? 2 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx.options.progressBar ? 3 : -1);
			}
		},
		styles: ["[_nghost-%COMP%]{display:block;opacity:0;transition:opacity var(--%NS%ease-time, .3s) var(--%NS%easing, ease-in-out)}.active[_nghost-%COMP%]{opacity:1}.removed[_nghost-%COMP%]{opacity:0}"]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
		type: Component,
		args: [{
			selector: "app-toast-component",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"[class]": "toastPackage.toastType + \" \" + toastPackage.config.toastClass",
				"[class.active]": "state ( ).value === \"active\"",
				"[class.removed]": "state ( ).value === \"removed\"",
				"[style.--ease-time.ms]": "state ( ).params.easeTime",
				"[style.--easing]": "state ( ).params.easing",
				"(click)": "tapToast ( )",
				"(mouseenter)": "stickAround ( )",
				"(mouseleave)": "delayedHideToast ( )"
			},
			preserveWhitespaces: false,
			template: "@if (options.closeButton) {\n  <button (click)=\"remove()\" type=\"button\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n}\n@if (title) {\n  <div [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n    @if (duplicatesCount) {\n      <ng-container>\n        [{{ duplicatesCount + 1 }}]\n      </ng-container>\n    }\n  </div>\n}\n@if (message) {\n  @if (options.enableHtml) {\n    <div role=\"alert\" [class]=\"options.messageClass\" [innerHTML]=\"message\">\n    </div>\n  } @else {\n    <div role=\"alert\" [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n      {{ message }}\n    </div>\n  }\n}\n@if (options.progressBar) {\n  <div>\n    <div class=\"toast-progress\" [style.width]=\"width() + '%'\"></div>\n  </div>\n}",
			styles: [":host{display:block;opacity:0;transition:opacity var(--ease-time, .3s) var(--easing, ease-in-out)}:host(.active){opacity:1}:host(.removed){opacity:0}\n"]
		}]
	}], () => [], null);
})();
var ToastNoAnimationComponent = class ToastNoAnimationComponent {
	message;
	title;
	options;
	duplicatesCount;
	originalTimeout;
	/** width of progress bar */
	width = signal(-1, ...ngDevMode ? [{ debugName: "width" }] : 	/* istanbul ignore next */ []);
	/** controls animation */
	state = signal("inactive", ...ngDevMode ? [{ debugName: "state" }] : 	/* istanbul ignore next */ []);
	toastPackage = inject(ToastPackage);
	appRef = inject(ApplicationRef);
	toastrService = inject(ToastrService);
	timeout;
	intervalId;
	hideTime;
	sub;
	sub1;
	sub2;
	sub3;
	constructor() {
		this.message = this.toastPackage.message;
		this.title = this.toastPackage.title;
		this.options = this.toastPackage.config;
		this.originalTimeout = this.toastPackage.config.timeOut;
		this.sub = this.toastPackage.toastRef.afterActivate().subscribe(() => {
			this.activateToast();
		});
		this.sub1 = this.toastPackage.toastRef.manualClosed().subscribe(() => {
			this.remove();
		});
		this.sub2 = this.toastPackage.toastRef.timeoutReset().subscribe(() => {
			this.resetTimeout();
		});
		this.sub3 = this.toastPackage.toastRef.countDuplicateObservable().subscribe((count) => {
			this.duplicatesCount = count;
		});
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
		this.sub1.unsubscribe();
		this.sub2.unsubscribe();
		this.sub3.unsubscribe();
		clearInterval(this.intervalId);
		clearTimeout(this.timeout);
	}
	/**
	* Handles click/tap on the toast.
	*/
	tapToast() {
		if (this.state() === "removed") return;
		this.toastPackage.triggerTap();
		if (this.options.tapToDismiss) this.remove();
	}
	/**
	* activates toast and sets timeout
	*/
	activateToast() {
		this.state.set("active");
		if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
			this.timeout = setTimeout(() => {
				this.remove();
			}, this.options.timeOut);
			this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
			if (this.options.progressBar) this.intervalId = setInterval(() => this.updateProgress(), 10);
		}
		if (this.options.onActivateTick) this.appRef.tick();
	}
	/**
	* updates progress bar width
	*/
	updateProgress() {
		if (this.width() === 0 || this.width() === 100 || !this.options.timeOut) return;
		const now = (/* @__PURE__ */ new Date()).getTime();
		const remaining = this.hideTime - now;
		this.width.set(remaining / this.options.timeOut * 100);
		if (this.options.progressAnimation === "increasing") this.width.update((width) => 100 - width);
		if (this.width() <= 0) this.width.set(0);
		if (this.width() >= 100) this.width.set(100);
	}
	resetTimeout() {
		clearTimeout(this.timeout);
		clearInterval(this.intervalId);
		this.state.set("active");
		this.options.timeOut = this.originalTimeout;
		this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
		this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.originalTimeout || 0);
		this.width.set(-1);
		if (this.options.progressBar) this.intervalId = setInterval(() => this.updateProgress(), 10);
	}
	/**
	* tells toastrService to remove this toast after animation time
	*/
	remove() {
		if (this.state() === "removed") return;
		clearTimeout(this.timeout);
		this.state.set("removed");
		this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
	}
	/**
	* Handles mouseenter to stick the toast around.
	*/
	stickAround() {
		if (this.state() === "removed") return;
		clearTimeout(this.timeout);
		this.options.timeOut = 0;
		this.hideTime = 0;
		clearInterval(this.intervalId);
		this.width.set(0);
	}
	/**
	* Handles mouseleave to delay hiding the toast.
	*/
	delayedHideToast() {
		if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state() === "removed") return;
		this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
		this.options.timeOut = this.options.extendedTimeOut;
		this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
		this.width.set(-1);
		if (this.options.progressBar) this.intervalId = setInterval(() => this.updateProgress(), 10);
	}
	static ɵfac = function ToastNoAnimationComponent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ToastNoAnimationComponent)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: ToastNoAnimationComponent,
		selectors: [["app-toast-noanimation"]],
		hostVars: 6,
		hostBindings: function ToastNoAnimationComponent_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function ToastNoAnimationComponent_click_HostBindingHandler() {
				return ctx.tapToast();
			})("mouseenter", function ToastNoAnimationComponent_mouseenter_HostBindingHandler() {
				return ctx.stickAround();
			})("mouseleave", function ToastNoAnimationComponent_mouseleave_HostBindingHandler() {
				return ctx.delayedHideToast();
			});
			if (rf & 2) {
				ɵɵclassMap(ctx.toastPackage.toastType + " " + ctx.toastPackage.config.toastClass);
				ɵɵclassProp("active", ctx.state() === "active")("removed", ctx.state() === "removed");
			}
		},
		decls: 4,
		vars: 4,
		consts: [
			[
				"type",
				"button",
				"aria-label",
				"Close",
				1,
				"toast-close-button"
			],
			[3, "class"],
			[
				"type",
				"button",
				"aria-label",
				"Close",
				1,
				"toast-close-button",
				3,
				"click"
			],
			["aria-hidden", "true"],
			[
				"role",
				"alert",
				3,
				"class",
				"innerHTML"
			],
			[
				"role",
				"alert",
				3,
				"class"
			],
			[
				"role",
				"alert",
				3,
				"innerHTML"
			],
			["role", "alert"],
			[1, "toast-progress"]
		],
		template: function ToastNoAnimationComponent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵconditionalCreate(0, ToastNoAnimationComponent_Conditional_0_Template, 3, 0, "button", 0);
				ɵɵconditionalCreate(1, ToastNoAnimationComponent_Conditional_1_Template, 4, 5, "div", 1);
				ɵɵconditionalCreate(2, ToastNoAnimationComponent_Conditional_2_Template, 2, 1);
				ɵɵconditionalCreate(3, ToastNoAnimationComponent_Conditional_3_Template, 2, 2, "div");
			}
			if (rf & 2) {
				ɵɵconditional(ctx.options.closeButton ? 0 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx.title ? 1 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx.message ? 2 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx.options.progressBar ? 3 : -1);
			}
		},
		styles: ["[_nghost-%COMP%]{display:block}"]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNoAnimationComponent, [{
		type: Component,
		args: [{
			selector: "app-toast-noanimation",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"[class]": "toastPackage.toastType + \" \" + toastPackage.config.toastClass",
				"[class.active]": "state ( ) === \"active\"",
				"[class.removed]": "state ( ) === \"removed\"",
				"(click)": "tapToast ( )",
				"(mouseenter)": "stickAround ( )",
				"(mouseleave)": "delayedHideToast ( )"
			},
			template: "@if (options.closeButton) {\n  <button (click)=\"remove()\" type=\"button\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n}\n@if (title) {\n  <div [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    <span>\n      {{ title }}\n      @if (duplicatesCount) {\n        <ng-container>\n          [{{ duplicatesCount + 1 }}]\n        </ng-container>\n      }\n    </span>\n  </div>\n}\n@if (message) {\n  @if (options.enableHtml) {\n    <div role=\"alert\"\n      [class]=\"options.messageClass\" [innerHTML]=\"message\">\n    </div>\n  } @else {\n    <div role=\"alert\"\n      [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n      {{ message }}\n    </div>\n  }\n}\n@if (options.progressBar) {\n  <div>\n    <div class=\"toast-progress\" [style.width]=\"width() + '%'\"></div>\n  </div>\n}",
			styles: [":host{display:block}\n"]
		}]
	}], () => [], null);
})();
var DefaultNoAnimationsGlobalConfig = {
	...DefaultNoComponentGlobalConfig,
	toastComponent: ToastNoAnimationComponent
};
var DefaultGlobalConfig = {
	...DefaultNoComponentGlobalConfig,
	toastComponent: ToastComponent
};
/**
* @description
* Provides the `TOAST_CONFIG` token with the given config.
*
* @param config The config to configure toastr.
* @returns The environment providers.
*
* @example
* ```ts
* import { provideToastr } from 'ngx-toastr';
*
* bootstrap(AppComponent, {
*   providers: [
*     provideToastr({
*       timeOut: 2000,
*       positionClass: 'toast-top-right',
*     }),
*   ],
* })
*/
var provideToastr = (config = {}) => {
	return makeEnvironmentProviders([{
		provide: TOAST_CONFIG,
		useValue: {
			default: DefaultGlobalConfig,
			config
		}
	}]);
};
/**
*  @description
*  Provides the `TOAST_CONFIG` token without animations.
*
* @param config The config to configure toastr.
* @returns The environment providers.
*
* @example
* ```ts
* import { provideToastrNoAnimation } from 'ngx-toastr';
*
* bootstrap(AppComponent, {
*   providers: [
*     provideToastrNoAnimation({
*       timeOut: 2000,
*       positionClass: 'toast-top-right',
*     }),
*   ],
* })
* ```
*/
var provideToastrNoAnimation = (config = {}) => {
	return makeEnvironmentProviders([ToastNoAnimationComponent, {
		provide: TOAST_CONFIG,
		useValue: {
			default: DefaultNoAnimationsGlobalConfig,
			config
		}
	}]);
};
//#endregion
export { BasePortalHost, ComponentPortal, DefaultGlobalConfig, DefaultNoAnimationsGlobalConfig, DefaultNoComponentGlobalConfig, Overlay, OverlayContainer, OverlayRef, TOAST_CONFIG, ToastComponent, ToastContainerDirective, ToastNoAnimationComponent, ToastPackage, ToastRef, ToastrService, provideToastr, provideToastrNoAnimation };
