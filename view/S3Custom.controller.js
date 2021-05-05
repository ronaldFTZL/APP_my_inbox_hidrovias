jQuery.sap.require("cross.fnd.fiori.inbox.util.Forward");
jQuery.sap.require("cross.fnd.fiori.inbox.util.SupportInfo");
jQuery.sap.require("cross.fnd.fiori.inbox.util.Conversions");
jQuery.sap.require("cross.fnd.fiori.inbox.attachment.util.AttachmentFormatters");
jQuery.sap.require("cross.fnd.fiori.inbox.util.DataManager");
jQuery.sap.require("sap.ca.scfld.md.controller.BaseDetailController");
jQuery.sap.require("sap.ca.ui.quickoverview.EmployeeLaunch");
jQuery.sap.require("sap.ca.ui.message.message");
jQuery.sap.require("sap.ca.ui.model.type.DateTime");
jQuery.sap.require("sap.collaboration.components.fiori.sharing.Component");
jQuery.sap.require("sap.collaboration.components.fiori.sharing.dialog.Component");
jQuery.sap.require("sap.ui.commons.TextArea");
jQuery.sap.require("sap.suite.ui.commons.Timeline");
jQuery.sap.require("sap.suite.ui.commons.TimelineItem");
jQuery.sap.require("cross.fnd.fiori.inbox.util.Resubmit");
jQuery.sap.require("cross.fnd.fiori.inbox.util.Parser");
sap.ui.controller("cross.fnd.fiori.inbox.CA_FIORI_INBOXExtension.view.S3Custom", {
	//    extHookOnDataLoaded: null,
	//    extHookGetEntitySetsToExpand: null,
	//    extHookChangeFooterButtons: null,
	//    oModel2: null,
	//    oDetailData2: null,
	//    oGenericComponent: null,
	//    oGenericAttachmentComponent: null,
	//    onInit: function () {
	//        sap.ca.scfld.md.controller.BaseDetailController.prototype.onInit.call(this);
	//        var v = this.getView();
	//        this.i18nBundle = v.getModel("i18n").getResourceBundle();
	//        this.sResubmitUniqueId = this.createId() + "DLG_RESUBMIT";
	//        sap.ca.scfld.md.app.Application.getImpl().getComponent().getEventBus().subscribe("cross.fnd.fiori.inbox", "open_supportinfo", this.onSupportInfoOpenEvent, this);
	//        this.aCA = [];
	//        this.aTaskDefinitionData = [];
	//        this.aTaskDefinitionDataObject = {};
	//        this.aUIExecutionLinkCatchedData = [];
	//        var u = this.getView().getModel().sUrlParams;
	//        this.oRouter.attachRouteMatched(this.handleNavToDetail, this);
	//        this.oHeaderFooterOptions = {};
	//        this.oTabBar = v.byId("tabBar");
	//        var t = this.byId("timeline");
	//        if (t) {
	//            var T = new sap.suite.ui.commons.TimelineItem({
	//                icon: {
	//                    path: "detail>ActionName",
	//                    formatter: cross.fnd.fiori.inbox.Conversions.formatterActionIcon
	//                },
	//                userName: {
	//                    parts: [
	//                        { path: "detail>PerformedByName" },
	//                        { path: "detail>ActionName" }
	//                    ],
	//                    formatter: cross.fnd.fiori.inbox.Conversions.formatterActionUsername
	//                },
	//                title: {
	//                    path: "detail>ActionName",
	//                    formatter: cross.fnd.fiori.inbox.Conversions.formatterActionText
	//                },
	//                dateTime: "{detail>Timestamp}"
	//            });
	//            t.bindAggregation("content", {
	//                path: "detail>/ProcessingLogs/results",
	//                template: T
	//            });
	//        }
	//        var d = sap.ca.scfld.md.app.Application.getImpl().getComponent().getDataManager();
	//        if (d) {
	//            d.detailPage = this.getView();
	//        }
	//    },
	//    createGenericAttachmentComponent: function (v) {
	//        this.oGenericAttachmentComponent = sap.ui.getCore().createComponent({
	//            name: "cross.fnd.fiori.inbox.attachment",
	//            settings: { attachmentHandle: this.fnCreateAttachmentHandle(this.sCtxPath) }
	//        });
	//        this.oGenericAttachmentComponent.uploadURL(this.fnGetUploadUrl(this.sCtxPath));
	//        v.byId("attachmentComponent").setPropagateModel(true);
	//        v.byId("attachmentComponent").setComponent(this.oGenericAttachmentComponent);
	//    },
	//    handleNavToDetail: function (e) {
	//        if (e.getParameter("name") === "detail") {
	//            var i = e.getParameter("arguments").InstanceID;
	//            if (i.search(":") == i.length - 1) {
	//                return;
	//            }
	//            if (jQuery.isEmptyObject(this.getView().getModel().oData)) {
	//                var p = {
	//                    SAP__Origin: e.getParameters().arguments.SAP__Origin,
	//                    InstanceID: e.getParameters().arguments.InstanceID + ":",
	//                    contextPath: e.getParameters().arguments.contextPath
	//                };
	//                this.oRouter.navTo("detail", p, true);
	//                return;
	//            }
	//            if (!this.stayOnDetailScreen || sap.ui.Device.system.phone) {
	//                var d = this.oTabBar.getItems()[0];
	//                this.oTabBar.setSelectedItem(d);
	//            } else {
	//                this.stayOnDetailScreen = false;
	//            }
	//            var r = {
	//                sCtxPath: "/" + e.getParameters().arguments.contextPath,
	//                sInstanceID: i,
	//                sSAP__Origin: e.getParameter("arguments").SAP__Origin,
	//                bCommentCreated: false
	//            };
	//            this.refreshData(r);
	//        }
	//    },
	//    fnGetUploadUrl: function (c) {
	//        return this.oContext.getModel().sServiceUrl + c + "/Attachments";
	//    },
	//    fnCreateAttachmentHandle: function (c) {
	//        var a = {
	//            fnOnAttachmentChange: jQuery.proxy(this.onAttachmentChange, this),
	//            fnOnAttachmentUploadComplete: jQuery.proxy(this.onAttachmentUploadComplete, this),
	//            fnOnAttachmentDeleted: jQuery.proxy(this.onAttachmentDeleted, this),
	//            detailModel: this.oModel2,
	//            uploadUrl: this.fnGetUploadUrl(this.sCtxPath)
	//        };
	//        return a;
	//    },
	//    fnRenderComponent: function (c) {
	//        if (c.ApplicationPath != "")
	//            jQuery.sap.registerModulePath(c.ComponentName, c.ApplicationPath[0] == "/" ? c.ApplicationPath : "/" + c.ApplicationPath);
	//        if (!jQuery.isEmptyObject(this.oGenericComponent)) {
	//            this.oGenericComponent.destroy();
	//        }
	//        var p = {
	//            sServiceUrl: c.ServiceURL,
	//            sAnnoFileURI: c.AnnotationURL,
	//            sErrorMessageNoData: this.i18nBundle.getText("annotationcomponent.load.error"),
	//            sApplicationPath: c.ApplicationPath
	//        };
	//        this.oGenericComponent = sap.ui.getCore().createComponent({
	//            name: c.ComponentName,
	//            componentData: {
	//                startupParameters: { oParameters: p },
	//                inboxHandle: {
	//                    attachmentHandle: this.fnCreateAttachmentHandle(this.sCtxPath),
	//                    tabSelectHandle: { fnOnTabSelect: jQuery.proxy(this.onTabSelect, this) },
	//                    inboxDetailView: this
	//                }
	//            }
	//        });
	//        var v = this.getView();
	//        v.byId("genericComponentContainer").setComponent(this.oGenericComponent);
	//    },
	//    fnParseComponentParameters: function (r) {
	//        var p = cross.fnd.fiori.inbox.util.Parser.fnParseComponentParameters(r);
	//        if (!jQuery.isEmptyObject(p)) {
	//            this.fnRenderComponent(p);
	//            this.oModel2.setProperty("/showGenericComponent", false);
	//            this.oModel2.setProperty("/showMyInboxDetailScreen", true);
	//            this.isGenericComponentRendered = true;
	//            this.fnShowHideDetailScrollBar(false);
	//        } else {
	//            this.isGenericComponentRendered = false;
	//            this.oModel2.setProperty("/showGenericComponent", true);
	//            this.oModel2.setProperty("/showMyInboxDetailScreen", false);
	//            this.fnShowHideDetailScrollBar(true);
	//        }
	//    },
	//    fnShowHideDetailScrollBar: function (s) {
	//        if (s) {
	//            this.byId("mainPage").setEnableScrolling(true);
	//        } else {
	//            this.byId("mainPage").setEnableScrolling(false);
	//        }
	//    },
	    refreshData: function (r) {
	        this.clearCustomAttributes();
	        var v = this.getView();
	        this.oContext = new sap.ui.model.Context(v.getModel(), r.sCtxPath);
	        v.setBindingContext(this.oContext);
	        this.sCtxPath = r.sCtxPath;
	        var i = jQuery.extend(true, {}, v.getModel().getData(this.oContext.getPath(), this.oContext));
	        this.oModel2 = new sap.ui.model.json.JSONModel(i);
	        v.setModel(this.oModel2, "detail");
	        this._updateHeaderTitle(i);
	        if (!this.bIsControllerInited) {
	            var c = sap.ca.scfld.md.app.Application.getImpl().getComponent();
	            this.oDataManager = c.getDataManager();
	            if (!this.oDataManager) {
	                var o = this.getView().getModel();
	                this.oDataManager = new cross.fnd.fiori.inbox.util.DataManager(o, this);
	                c.setDataManager(this.oDataManager);
	            }
	            this.oDataManager.attachItemRemoved(jQuery.proxy(this._handleItemRemoved, this));
	            this.bIsControllerInited = true;
	        }
	        var t = this;
	        var s = function (d, D) {
	            if (t.extHookOnDataLoaded) {
	                t.extHookOnDataLoaded(d);
	            }
	            if (sap.ui.Device.system.desktop) {
	                var k = d.SAP__Origin + d.InstanceID;
	                if (d.UIExecutionLink && d.UIExecutionLink.InstanceID) {
	                    this.aUIExecutionLinkCatchedData[k] = d.UIExecutionLink;
	                } else {
	                    d.UIExecutionLink = this.aUIExecutionLinkCatchedData[k];
	                }
	            }
	            if (d.UIExecutionLink.GUI_Link) {
	                t.fnParseComponentParameters(d.UIExecutionLink.GUI_Link);
	            }
	            if (!this.isGenericComponentRendered) {
	                if (this.getView().byId("attachmentComponent"))
	                    t.createGenericAttachmentComponent(this.getView());
	            }
	            t.oModel2.setData(d, true);
	            t.oDetailData2 = d;
	            t.createDecisionButtons(D, r.sSAP__Origin);
	            // t.addShareOnJamAndEmail();
	            if (this.oModel2.getData().TaskSupports.Attachments) {
	                t.fnCountUpdater("Attachments", d.SAP__Origin, d.InstanceID);
	            }
	            t.fnCountUpdater("Comments", d.SAP__Origin, d.InstanceID);
	            if (this.oModel2.getData().TaskSupports.ProcessingLogs)
	                t.fnCountUpdater("ProcessingLogs", d.SAP__Origin, d.InstanceID);
	            if (this.oModel2.getData().TaskSupports.TaskObject && this.oDataManager.bShowTaskObjects) {
	                t.fnCountUpdater("ObjectLinks", d.SAP__Origin, d.InstanceID);
	            }
	            var u = t.getView().getModel().sUrlParams;
	            if (t.byId("tabBar").getSelectedKey() == "NOTES") {
	                t.fnSetIconForCommentsFeedInput();
	                if (t.oModel2.getData().HasComments) {
	                    t.fnReadCommentsAndCreatedByDetails();
	                }
	            }
	            if (t.byId("tabBar").getSelectedKey() == "ATTACHMENTS" && this.oModel2.getData().HasAttachments) {
	                t.fnFetchAttachments();
	            }
	            if (t.byId("tabBar").getSelectedKey() == "PROCESSINGLOGS" && this.oModel2.getData().TaskSupports.ProcessingLogs) {
	                t.fnFetchProcessingLogs();
	            }
	            if (t.byId("tabBar").getSelectedKey() == "OBJECTLINKS" && this.oModel2.getData().TaskSupports.TaskObject) {
	                t.fnFetchObjectLinks();
	            }
	            if (t.byId("tabBar").getSelectedKey() == "DESCRIPTION")
	                t.byId("DescriptionContent").rerender();
	            if (d.CustomAttributeData.results.length > 0)
	                this.fnHandleCustomAttributeCreation(v, d);
	        };
	        if (this.oHeaderFooterOptions) {
	            this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, {
	                oPositiveAction: null,
	                oNegativeAction: null,
	                buttonList: [],
	                oJamOptions: null
	            });
	            this.refreshHeaderFooterOptions();
	        }
	        var e = [
	            "Description",
	            "CustomAttributeData"
	        ];
	        var k = r.sSAP__Origin + r.sInstanceID;
	        if (!this.aUIExecutionLinkCatchedData[k]) {
	            e.push("UIExecutionLink");
	        }
	        if (this.extHookGetEntitySetsToExpand) {
	            var E = this.extHookGetEntitySetsToExpand();
	            e.push.apply(e, E);
	        }
	        if (this.oModel2 != null)
	            this.fnClearCachedData();
	        this.oDataManager.readDataOnTaskSelectionWithDecisionOptions(r.sCtxPath, e, r.sSAP__Origin, r.sInstanceID, jQuery.proxy(s, this));
	    },
	//    fnHandleCustomAttributeCreation: function (v, d) {
	//        this.clearCustomAttributes();
	//        var c = this.aCA;
	//        var t = this;
	//        var s = function (D, e) {
	//            if (e != true) {
	//                t.aTaskDefinitionData.push(D);
	//                for (var i = 0; i < D.CustomAttributeDefinitionData.results.length; i++)
	//                    t.aTaskDefinitionDataObject[d.TaskDefinitionID + "_" + D.CustomAttributeDefinitionData.results[i].Name] = D.CustomAttributeDefinitionData.results[i];
	//                t.aTaskDefinitionDataObject[d.TaskDefinitionID + "_Exists"] = "true";
	//            }
	//            var o = v.byId("customAttributesContainer");
	//            for (var i = 0; i < d.CustomAttributeData.results.length; i++) {
	//                var A = d.CustomAttributeData.results[i].Name;
	//                var f;
	//                var l;
	//                var g = false;
	//                if (!t.aTaskDefinitionDataObject[d.TaskDefinitionID + "_" + A])
	//                    continue;
	//                l = t.aTaskDefinitionDataObject[d.TaskDefinitionID + "_" + A].Type;
	//                f = t.aTaskDefinitionDataObject[d.TaskDefinitionID + "_" + A].Label;
	//                if (l && f)
	//                    g = true;
	//                if (g == true) {
	//                    var n = new sap.ui.layout.form.FormElement("", {});
	//                    n.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData("", {
	//                        linebreak: true,
	//                        margin: false
	//                    }));
	//                    var L = new sap.m.Label("", { text: f });
	//                    L.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData("", {
	//                        weight: 3,
	//                        minWidth: 192
	//                    }));
	//                    n.setLabel(L);
	//                    var V = cross.fnd.fiori.inbox.Conversions.fnCustomAttributeTypeFormatter(d.CustomAttributeData.results[i].Value, l);
	//                    var T = new sap.m.Text("", { text: V });
	//                    T.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData("", { weight: 5 }));
	//                    n.addField(T);
	//                    o.addFormElement(n);
	//                    c.push(n);
	//                }
	//            }
	//            t.byId("DescriptionContent").rerender();
	//        };
	//        var C = sap.ca.scfld.md.app.Application.getImpl().getComponent();
	//        this.oDataManager = C.getDataManager();
	//        var b = false;
	//        var a;
	//        for (var i = 0; i < t.aTaskDefinitionData.length; i++) {
	//            if (t.aTaskDefinitionDataObject[d.TaskDefinitionID + "_Exists"] == "true") {
	//                b = true;
	//                a = i;
	//                break;
	//            }
	//        }
	//        if (b) {
	//            s("", true);
	//        } else {
	//            this.oDataManager.readCustomAttributeDefinitionData(d.SAP__Origin, d.TaskDefinitionID, s);
	//        }
	//    },
	//    clearCustomAttributes: function () {
	//        if (this.aCA.length > 0) {
	//            for (var i = 0; i < this.aCA.length; i++)
	//                this.aCA[i].destroy();
	//            this.aCA = [];
	//        }
	//    },
	//    onAttachmentChange: function (e) {
	//        var u = e.getSource();
	//        var f = e.getParameters().getParameters().files[0].name;
	//        if (u.getHeaderParameters())
	//            u.destroyHeaderParameters();
	//        var l = f.lastIndexOf(".");
	//        if (l != -1) {
	//            f = f.substr(0, l);
	//        }
	//        u.addHeaderParameter(new sap.m.UploadCollectionParameter({
	//            name: "x-csrf-token",
	//            value: this.getXsrfToken()
	//        }));
	//        u.addHeaderParameter(new sap.m.UploadCollectionParameter({
	//            name: "slug",
	//            value: f
	//        }));
	//        u.addParameter(new sap.m.UploadCollectionParameter({
	//            name: "x-csrf-token",
	//            value: this.getXsrfToken()
	//        }));
	//        u.addParameter(new sap.m.UploadCollectionParameter({
	//            name: "slug",
	//            value: f
	//        }));
	//    },
	//    onAttachmentUploadComplete: function (e) {
	//        var i = this.oModel2.getData();
	//        var t = this;
	//        t.oEventSource = e.getSource();
	//        var c = function () {
	//            this.oEventSource.updateAggregation("items");
	//            this.oEventSource.rerender();
	//        };
	//        if (e.getParameters().getParameters().status == 201) {
	//            this.fnFetchAttachments();
	//            sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.attachmentUpload"));
	//            this.oDataManager.updateTaskAfterAddAction(i, "Attachments", jQuery.proxy(function (d) {
	//                this._updateTaskAfterAddAction(i, d, "/AttachmentsCount", "HasAttachments");
	//            }, this));
	//        } else {
	//            var E = this.i18nBundle.getText("dialog.error.attachmentUpload");
	//            sap.ca.ui.message.showMessageBox({
	//                type: sap.ca.ui.message.Type.ERROR,
	//                message: E,
	//                details: ""
	//            }, jQuery.proxy(c, t));
	//        }
	//    },
	//    onAttachmentDeleted: function (e) {
	//        this.stayOnDetailScreen = true;
	//        var a = e.getParameters().documentId;
	//        var i = this.oModel2.getData();
	//        this.oDataManager.deleteAttachment(i.SAP__Origin, i.InstanceID, a, $.proxy(function () {
	//            sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.attachmentDeleted"));
	//        }, this), $.proxy(function (E) {
	//            var s = this.i18nBundle.getText("dialog.error.attachmentDelete");
	//            sap.ca.ui.message.showMessageBox({
	//                type: sap.ca.ui.message.Type.ERROR,
	//                message: s,
	//                details: ""
	//            }, $.proxy(function () {
	//                this.oDataManager.processListAfterAction(i.SAP__Origin, i.InstanceID);
	//            }, this));
	//        }, this));
	//    },
	//    getXsrfToken: function () {
	//        var t = this.getView().getModel().getHeaders()["x-csrf-token"];
	//        if (!t) {
	//            this.getView().getModel().refreshSecurityToken(function (e, o) {
	//                t = o.headers["x-csrf-token"];
	//            }, function () {
	//                sap.ca.ui.message.showMessageBox({
	//                    type: sap.ca.ui.message.Type.ERROR,
	//                    message: "Could not get XSRF token",
	//                    details: ""
	//                });
	//            }, false);
	//        }
	//        return t;
	//    },
	//    onFileUploadFailed: function (e) {
	//        var E = this.i18nBundle.getText("dialog.error.attachmentUpload");
	//        sap.ca.ui.message.showMessageBox({
	//            type: sap.ca.ui.message.Type.ERROR,
	//            message: E,
	//            details: e.getParameters().exception
	//        });
	//    },
	//    addShareOnJamAndEmail: function () {
	//        var j = {
	//            oShareSettings: {
	//                object: {
	//                    id: window.location.href,
	//                    share: this.getJamDescription()
	//                }
	//            }
	//        };
	//        var e = {
	//            sSubject: this.getMailSubject(),
	//            fGetMailBody: jQuery.proxy(this.getMailBody, this)
	//        };
	//        var b = {};
	//        b.oEmailSettings = e;
	//        b.oJamOptions = j;
	//        if (this.extHookChangeFooterButtons) {
	//            this.extHookChangeFooterButtons(b);
	//            e = b.oEmailSettings;
	//            j = b.oJamOptions;
	//        }
	//        this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, {
	//            oJamOptions: j,
	//            oEmailSettings: e
	//        });
	//        this.refreshHeaderFooterOptions();
	//    },
	//    _getDescriptionForShare: function (d) {
	//        var D = this.oModel2.getData();
	//        var b = "\n\n" + this.i18nBundle.getText("share.email.body.detailsOfTheItem") + "\n\n";
	//        var o = sap.ui.core.format.DateFormat.getDateInstance();
	//        if (D.TaskTitle != "") {
	//            b += this.i18nBundle.getText("item.taskTitle", D.TaskTitle) + "\n";
	//        }
	//        if (D.Priority != "") {
	//            b += this.i18nBundle.getText("item.priority", cross.fnd.fiori.inbox.Conversions.formatterPriority.call(this.getView(), D.SAP__Origin, D.Priority)) + "\n";
	//        }
	//        if (D.CompletionDeadLine) {
	//            b += this.i18nBundle.getText("item.dueDate", o.format(D.CompletionDeadLine, true)) + "\n";
	//        }
	//        if (d) {
	//            b += this.i18nBundle.getText("item.description", d) + "\n";
	//        } else if (D.Description && D.Description.Description && D.Description.Description != "") {
	//            b += this.i18nBundle.getText("item.description", D.Description.Description.trim()) + "\n";
	//        }
	//        var c = D.CreatedByName;
	//        if (c == "") {
	//            c = D.CreatedBy;
	//        }
	//        if (c != "") {
	//            b += this.i18nBundle.getText("item.createdBy", c) + "\n";
	//        }
	//        if (D.CreatedOn) {
	//            b += this.i18nBundle.getText("item.createdOn", o.format(D.CreatedOn, true)) + "\n";
	//        }
	//        return b;
	//    },
	//    _getDescriptionForShareInMail: function (d) {
	//        var b = this._getDescriptionForShare(d);
	//        b += this.i18nBundle.getText("share.email.body.link", window.location.href.split("(").join("%28").split(")").join("%29")) + "\n";
	//        return b;
	//    },
	//    getJamDescription: function () {
	//        var b = this._getDescriptionForShare();
	//        return b;
	//    },
	//    getMailSubject: function () {
	//        var d = this.oModel2.getData();
	//        var p = cross.fnd.fiori.inbox.Conversions.formatterPriority.call(this.getView(), d.SAP__Origin, d.Priority);
	//        var c = d.CreatedByName;
	//        var t = d.TaskTitle;
	//        return cross.fnd.fiori.inbox.Conversions.formatterMailSubject.call(this, p, c, t);
	//    },
	//    getMailBody: function () {
	//        if (jQuery.browser.msie) {
	//            return window.location.href.split("(").join("%28").split(")").join("%29");
	//        }
	//        var f = this._getDescriptionForShareInMail();
	//        var m = this.getMailSubject();
	//        var F = sap.m.URLHelper.normalizeEmail(null, m, f);
	//        if (F.length > 2000) {
	//            var d = this.oModel2.getData();
	//            var M = this._getDescriptionForShareInMail(" ");
	//            var s = sap.m.URLHelper.normalizeEmail(null, m, M);
	//            var i = 2000 - s.length;
	//            var D = "";
	//            if (d.Description) {
	//                D = window.encodeURIComponent(d.Description.Description.trim());
	//            }
	//            D = D.substring(0, i);
	//            var b = false;
	//            while (!b || D.length == 0) {
	//                b = true;
	//                try {
	//                    D = window.decodeURIComponent(D);
	//                } catch (e) {
	//                    D = D.substring(0, D.length - 1);
	//                    b = false;
	//                }
	//            }
	//            D = D.substring(0, D.length - 3) + "...";
	//            var t = this._getDescriptionForShareInMail(D);
	//            return t;
	//        }
	//        return f;
	//    },
	//    _handleItemRemoved: function (e) {
	//        if (sap.ui.Device.system.phone && !this.getView().getParent().getParent().isMasterShown()) {
	//            if (!this.stayOnDetailScreen) {
	//                this.oRouter.navTo("master", {}, sap.ui.Device.system.phone);
	//                window.history.back();
	//            } else {
	//                var r = {
	//                    sCtxPath: this.getView().getBindingContext().getPath(),
	//                    sInstanceID: this.oModel2.getData().InstanceID,
	//                    sSAP__Origin: this.oModel2.getData().SAP__Origin,
	//                    bCommentCreated: true
	//                };
	//                this.refreshData(r);
	//                this.stayOnDetailScreen = false;
	//            }
	//        }
	//    },
	//    _updateHeaderTitle: function (d) {
	//        if (d) {
	//            this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, { sDetailTitle: d.TaskTitle });
	//            this.refreshHeaderFooterOptions();
	//        }
	//    },
	//    _isTaskConfirmable: function (i) {
	//        if (i.Status == "EXECUTED") {
	//            return true;
	//        } else {
	//            return false;
	//        }
	//    },
	    createDecisionButtons: function (d, o) {
	        var p = null;
	        var n = null;
	        var b = [];
	        var t = this;
	        var I = this.oModel2.getData();
	        if (!this._isTaskConfirmable(I)) {
	            for (var i = 0; i < d.length; i++) {
	                var D = d[i];
	                D.SAP__Origin = o;
	                if (D.Nature === "POSITIVE") {
	                    p = {
	                        sBtnTxt: D.DecisionText,
	                        onBtnPressed: function (a) {
	                            return function () {
	                                t.showDecisionDialog(t.oDataManager.FUNCTION_IMPORT_DECISION, a, true);
	                            };
	                        }(D)
	                    };
	                } else if (D.Nature === "NEGATIVE") {
	                    n = {
	                        sBtnTxt: D.DecisionText,
	                        onBtnPressed: function (a) {
	                            return function () {
	                                t.showDecisionDialog(t.oDataManager.FUNCTION_IMPORT_DECISION, a, true);
	                            };
	                        }(D)
	                    };
	                } else {
	                    b.push({
	                        sBtnTxt: D.DecisionText,
	                        onBtnPressed: function (a) {
	                            return function () {
	                                t.showDecisionDialog(t.oDataManager.FUNCTION_IMPORT_DECISION, a, true);
	                            };
	                        }(D)
	                    });
	                }
	            }
	        }
	        if (this._isTaskConfirmable(I)) {
	            // p = {
	            //     sI18nBtnTxt: "XBUT_CONFIRM",
	            //     onBtnPressed: function (a) {
	            //         return function () {
	            //             t.showConfirmationDialog(t.oDataManager.FUNCTION_IMPORT_CONFIRM, I);
	            //         };
	            //     }(I)
	            // };
	        }
	        if (I.SupportsClaim) {
	            // b.push({
	            //     sI18nBtnTxt: "XBUT_CLAIM",
	            //     onBtnPressed: function (e) {
	            //         if (sap.ui.Device.system.phone) {
	            //             t.stayOnDetailScreen = true;
	            //         }
	            //         t.sendAction("Claim", I, null);
	            //     }
	            // });
	        }
	        if (I.SupportsRelease) {
	            // b.push({
	            //     sI18nBtnTxt: "XBUT_RELEASE",
	            //     onBtnPressed: function (e) {
	            //         if (sap.ui.Device.system.phone) {
	            //             t.stayOnDetailScreen = true;
	            //         }
	            //         t.sendAction("Release", I, null);
	            //     }
	            // });
	        }
	        if (I.SupportsForward) {
	            // b.push({
	            //     sI18nBtnTxt: "XBUT_FORWARD",
	            //     onBtnPressed: jQuery.proxy(this.onForwardPopUp, this)
	            // });
	        }
	        if (I.TaskSupports) {
	            // if (I.TaskSupports.Resubmit) {
	            //     b.push({
	            //         sI18nBtnTxt: "XBUT_RESUBMIT",
	            //         onBtnPressed: jQuery.proxy(this.showResubmitPopUp, this)
	            //     });
	            // }
	        }
	        if (sap.ui.Device.system.desktop && I.UIExecutionLink && I.UIExecutionLink.GUI_Link !== "" && !t.isGenericComponentRendered) {
	            // b.push({
	            //     sI18nBtnTxt: "XBUT_OPEN",
	            //     onBtnPressed: function (e) {
	            //         t.checkStatusAndOpenTaskUI();
	            //     }
	            // });
	        }
	        var B = {};
	        B.oPositiveAction = p;
	        B.oNegativeAction = n;
	        B.aButtonList = b;
	        if (this.extHookChangeFooterButtons) {
	            this.extHookChangeFooterButtons(B);
	            p = B.oPositiveAction;
	            n = B.oNegativeAction;
	            b = B.aButtonList;
	        }
	        this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, {
	            oPositiveAction: p,
	            oNegativeAction: n,
	            buttonList: b,
	            bSuppressBookmarkButton: true
	        });
	        this.refreshHeaderFooterOptions();
	    },
	//    startForwardFilter: function (l, q) {
	//        q = q.toLowerCase();
	//        var f = l.getBindingContext().getProperty("DisplayName").toLowerCase();
	//        var d = l.getBindingContext().getProperty("Department").toLowerCase();
	//        return f.indexOf(q) != -1 || d.indexOf(q) != -1;
	//    },
	//    closeForwardPopUp: function (r) {
	//        if (r && r.bConfirmed) {
	//            var i = this.oModel2.getData();
	//            var o = i.SAP__Origin;
	//            var I = i.InstanceID;
	//            this.oDataManager.doForward(o, I, r.oAgentToBeForwarded.UniqueName, r.sNote, jQuery.proxy(function () {
	//                sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.forward", r.oAgentToBeForwarded.DisplayName));
	//            }, this));
	//        }
	//    },
	//    onForwardPopUp: function () {
	//        var i = this.oModel2.getData();
	//        var o = i.SAP__Origin;
	//        var I = i.InstanceID;
	//        cross.fnd.fiori.inbox.util.Forward.open(jQuery.proxy(this.startForwardFilter, this), jQuery.proxy(this.closeForwardPopUp, this));
	//        this.oDataManager.readPotentialOwners(o, I, jQuery.proxy(this._PotentialOwnersSuccess, this));
	//    },
	//    _PotentialOwnersSuccess: function (r) {
	//        cross.fnd.fiori.inbox.util.Forward.setAgents(r.results);
	//        cross.fnd.fiori.inbox.util.Forward.setOrigin(this.oModel2.getData().SAP__Origin);
	//    },
	//    showResubmitPopUp: function () {
	//        cross.fnd.fiori.inbox.util.Resubmit.open(this.sResubmitUniqueId, this, this.getView());
	//    },
	//    handleResubmitPopOverOk: function (e) {
	//        var i = this.oModel2.getData();
	//        var o = i.SAP__Origin;
	//        var I = i.InstanceID;
	//        var c = sap.ui.core.Fragment.byId(this.sResubmitUniqueId, "DATE_RESUBMIT");
	//        var s = c.getSelectedDates();
	//        if (s.length > 0) {
	//            var d = s[0].getStartDate();
	//            var f = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "YYYY-MM-ddTHH:mm:ss" });
	//            this.oDataManager.doResubmit(o, I, "datetime'" + f.format(d) + "'", jQuery.proxy(function () {
	//                sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.resubmit"));
	//            }, this));
	//            cross.fnd.fiori.inbox.util.Resubmit.close();
	//        }
	//    },
	//    onEmployeeLaunchTask: function (e) {
	//        var i = this.oModel2.getData();
	//        var o = i.SAP__Origin;
	//        var c = i.CreatedBy;
	//        var s = cross.fnd.fiori.inbox.Conversions.getSelectedControl(e);
	//        this.oDataManager.readUserInfo(o, c, jQuery.proxy(this._showEmployeeCard, this, s));
	//    },
	//    onEmployeeLaunchCommentSender: function (e) {
	//        var i = this.oModel2.getData();
	//        var o = i.SAP__Origin;
	//        var c = e.getSource().getBindingContext("detail").getProperty("CreatedBy");
	//        var s = cross.fnd.fiori.inbox.Conversions.getSelectedControl(e);
	//        this.oDataManager.readUserInfo(o, c, jQuery.proxy(this._showEmployeeCard, this, s));
	//    },
	//    onEmployeeLaunchCommentIcon: function (e) {
	//        var o = e.getSource().getBindingContext().getProperty("SAP__Origin");
	//        var c = e.getSource().getBindingContext("detail").getModel().getProperty(e.getSource().getBindingContext("detail").getPath()).CreatedBy;
	//        if (!o) {
	//            var i = this.oModel2.getData();
	//            o = i.SAP__Origin;
	//        }
	//        var s = cross.fnd.fiori.inbox.Conversions.getSelectedControl(e);
	//        this.oDataManager.readUserInfo(o, c, jQuery.proxy(this._showEmployeeCard, this, s));
	//    },
	//    _showEmployeeCard: function (c, r) {
	//        var i = this.oModel2.getData();
	//        var t = i.TaskTitle;
	//        var e = {
	//            title: this.getView().getModel("i18n").getProperty("bc.title.employee"),
	//            name: r.DisplayName,
	//            imgurl: cross.fnd.fiori.inbox.Conversions.formatterUserCardIcon(r.__metadata.media_src),
	//            department: r.Department,
	//            contactmobile: r.MobilePhone,
	//            contactphone: r.WorkPhone,
	//            contactemail: r.Email,
	//            contactemailsubj: t,
	//            companyname: r.Company
	//        };
	//        var E = new sap.ca.ui.quickoverview.EmployeeLaunch(e);
	//        E.openBy(c);
	//    },
	//    onAttachmentShow: function (e) {
	//        var c = e.getSource().getBindingContext("detail");
	//        var m = cross.fnd.fiori.inbox.attachment.getRelativeMediaSrc(c.getProperty().__metadata.media_src);
	//        sap.m.URLHelper.redirect(m, true);
	//    },
	//    showDecisionDialog: function (f, d, s) {
	//        sap.ca.ui.dialog.confirmation.open({
	//            question: this.i18nBundle.getText("XMSG_DECISION_QUESTION", d.DecisionText),
	//            showNote: s,
	//            title: this.i18nBundle.getText("XTIT_SUBMIT_DECISION"),
	//            confirmButtonLabel: this.i18nBundle.getText("XBUT_SUBMIT"),
	//            noteMandatory: d.CommentMandatory
	//        }, jQuery.proxy(function (d, r) {
	//            if (r.isConfirmed) {
	//                this.sendAction(f, d, r.sNote);
	//            }
	//        }, this, d));
	//    },
	//    showConfirmationDialog: function (f, i) {
	//        sap.ca.ui.dialog.confirmation.open({
	//            question: this.i18nBundle.getText("XMSG_CONFIRM_QUESTION"),
	//            showNote: false,
	//            title: this.i18nBundle.getText("XTIT_SUBMIT_CONFIRM"),
	//            confirmButtonLabel: this.i18nBundle.getText("XBUT_CONFIRM")
	//        }, jQuery.proxy(function (i, r) {
	//            if (r.isConfirmed) {
	//                this.sendAction(f, i, null);
	//            }
	//        }, this, i));
	//    },
	//    onCommentPost: function (e) {
	//        var c = e.getParameter("value");
	//        if (c && c.length > 0) {
	//            this.sendAction("AddComment", null, c);
	//        }
	//    },
	//    sendAction: function (f, d, n) {
	//        var t = this;
	//        var s;
	//        var a = function () {
	//            t.oDataManager.processListAfterAction(d.SAP__Origin, d.InstanceID);
	//        };
	//        switch (f) {
	//        case "Release":
	//            s = "dialog.success.release";
	//            break;
	//        case "Claim":
	//            s = "dialog.success.reserve";
	//            break;
	//        case "AddComment":
	//            s = "dialog.success.addComment";
	//            break;
	//        case "Confirm":
	//            s = "dialog.success.completed";
	//            break;
	//        default:
	//            s = "dialog.success.complete";
	//        }
	//        switch (f) {
	//        case "AddComment": {
	//                var i = this.oModel2.getData();
	//                this.oDataManager.addComment(i.SAP__Origin, i.InstanceID, n, jQuery.proxy(function (b, r) {
	//                    this.fnReadCommentsAndCreatedByDetails();
	//                    jQuery.sap.delayedCall(500, this, function () {
	//                        sap.ca.ui.message.showMessageToast(this.i18nBundle.getText(s));
	//                    });
	//                    this.oDataManager.updateTaskAfterAddAction(i, "Comments", jQuery.proxy(function (D) {
	//                        this._updateTaskAfterAddAction(i, D, "/CommentsCount", "HasComments");
	//                    }, this));
	//                }, this));
	//                break;
	//            }
	//        default: {
	//                this.oDataManager.sendAction(f, d, n, jQuery.proxy(function (D) {
	//                    jQuery.sap.delayedCall(500, this, function () {
	//                        sap.ca.ui.message.showMessageToast(this.i18nBundle.getText(s));
	//                    });
	//                }, this, d), jQuery.proxy(function () {
	//                    this.oDataManager.processListAfterAction(d.SAP__Origin, d.InstanceID);
	//                }, this));
	//            }
	//        }
	//    },
	//    refreshHeaderFooterOptions: function () {
	//        this._oHeaderFooterOptions = jQuery.extend(this._oHeaderFooterOptions, this.oHeaderFooterOptions);
	//        this.setHeaderFooterOptions(this._oHeaderFooterOptions);
	//    },
	//    checkStatusAndOpenTaskUI: function () {
	//        var t = this.oModel2.getData();
	//        this.oDataManager.checkStatusAndOpenTask(t.SAP__Origin, t.InstanceID, jQuery.proxy(this.openTaskUIWindow, this));
	//    },
	//    openTaskUIWindow: function () {
	//        var a = sap.ui.getCore().getConfiguration().getTheme();
	//        var c = "";
	//        var r = /^sap_hcb/i;
	//        var t = {
	//            sap_hcb: {
	//                WDJ: "/com.sap.ui.lightspeed/themes/sap_hcb",
	//                WDA: "sap_hcb"
	//            }
	//        };
	//        if (r.test(a)) {
	//            c += "&sap-ui-theme=" + jQuery.sap.encodeURL(a);
	//            var T = t[a];
	//            if (T) {
	//                c += T["WDJ"] ? "&sap-cssurl=" + location.protocol + "//" + location.host + ":" + location.port + T["WDJ"] : "";
	//                c += T["WDA"] ? "&sap-theme=" + jQuery.sap.encodeURL(T["WDA"]) : "";
	//            }
	//        } else {
	//            c += "&sap-ui-theme=" + jQuery.sap.encodeURL(a);
	//        }
	//        var u = this.oModel2.getData().UIExecutionLink.GUI_Link + c;
	//        if (jQuery.sap.validateUrl(u)) {
	//            sap.m.URLHelper.redirect(u, true);
	//        } else if (u.indexOf("?") > 0 && jQuery.sap.validateUrl(cross.fnd.fiori.inbox.Conversions.getEncodedURL(u))) {
	//            u = cross.fnd.fiori.inbox.Conversions.getEncodedURL(u);
	//            sap.m.URLHelper.redirect(u, true);
	//        } else {
	//            sap.ca.ui.message.showMessageBox({
	//                type: sap.ca.ui.message.Type.ERROR,
	//                message: this.i18nBundle.getText("dialog.error.taskExecutionUI")
	//            });
	//        }
	//    },
	//    onTabSelect: function (c) {
	//        var s = c.getParameters().selectedKey;
	//        var m = this.oModel2 ? this.oModel2.getData() : "";
	//        switch (s) {
	//        case "NOTES":
	//            this.fnSetIconForCommentsFeedInput();
	//            if (m.HasComments == true && (!m.Comments.results || m.Comments.results && m.Comments.results.length != m.CommentsCount)) {
	//                this.fnReadCommentsAndCreatedByDetails();
	//            }
	//            break;
	//        case "ATTACHMENTS":
	//            if (m.HasAttachments == true && !m.Attachments.results) {
	//                this.fnFetchAttachments();
	//            } else if (m.HasAttachments == false) {
	//                this.oModel2.setProperty("/Attachments", {});
	//            }
	//            break;
	//        case "PROCESSINGLOGS":
	//            if (m.TaskSupports.ProcessingLogs == true && !m.ProcessingLogs.results) {
	//                this.fnFetchProcessingLogs();
	//                this.byId("timeline").setGrowingThreshold(10);
	//            }
	//            break;
	//        case "OBJECTLINKS":
	//            if (m.TaskSupports.TaskObject === true && !m.ObjectLinks && m.ObjectLinksCount > 0) {
	//                this.fnFetchObjectLinks();
	//            }
	//            break;
	//        }
	//    },
	//    fnFetchAttachments: function () {
	//        var m = this.oModel2.getData();
	//        var t = this;
	//        var v = t.oAttachmentComponentView;
	//        var s = function (a) {
	//            t.oModel2.setProperty("/Attachments", a);
	//        };
	//        if (t.oGenericAttachmentComponent && !t.isGenericComponentRendered) {
	//            v = t.oGenericAttachmentComponent.view;
	//        }
	//        t.oDataManager.fnGetDataWithCountSupport(v, m.SAP__Origin, m.InstanceID, false, s, "Attachments");
	//    },
	//    fnSetIconForCommentsFeedInput: function () {
	//        if (this.byId("commentsFeedInput") && !this.byId("commentsFeedInput").getIcon()) {
	//            var s = this.oModel2.getData().SAP__Origin;
	//            var u;
	//            var i = false;
	//            var a = "sap-icon://person-placeholder";
	//            if (sap.ushell.Container != undefined) {
	//                u = sap.ushell.Container.getUser().getId();
	//                var d = this.oDataManager;
	//                a = d.oModel.sServiceUrl + "/UserInfoCollection(SAP__Origin='" + s + "',UniqueName='" + u + "')/$value";
	//                i = d.fnIsImagePresent(a, u);
	//                if (!i) {
	//                    a = "sap-icon://person-placeholder";
	//                }
	//            }
	//            this.byId("commentsFeedInput").setIcon(a);
	//        }
	//    },
	//    fnCountUpdater: function (k, s, i) {
	//        var t = this;
	//        switch (k) {
	//        case "Attachments":
	//            t.oModel2.setProperty("/AttachmentsCount", "...");
	//            this.oDataManager.fnGetDataWithCountSupport(null, s, i, true, function (n) {
	//                t.oModel2.setProperty("/AttachmentsCount", n);
	//                t.fnHandleNoTextCreation("Attachments");
	//            }, "Attachments");
	//            break;
	//        case "Comments":
	//            t.oModel2.setProperty("/CommentsCount", "...");
	//            this.oDataManager.fnGetDataWithCountSupport(null, s, i, true, function (n) {
	//                t.oModel2.setProperty("/CommentsCount", n);
	//                t.fnHandleNoTextCreation("Comments");
	//            }, "Comments");
	//            break;
	//        case "ProcessingLogs":
	//            t.oModel2.setProperty("/ProcessingLogsCount", "...");
	//            this.oDataManager.fnGetDataWithCountSupport(null, s, i, true, function (n) {
	//                t.oModel2.setProperty("/ProcessingLogsCount", n);
	//                t.fnHandleNoTextCreation("ProcessingLogs");
	//            }, "ProcessingLogs");
	//            break;
	//        case "ObjectLinks":
	//            t.oModel2.setProperty("/ObjectLinksCount", "...");
	//            this.oDataManager.fnGetDataWithCountSupport(null, s, i, true, function (n) {
	//                t.oModel2.setProperty("/ObjectLinksCount", n);
	//                t.fnHandleNoTextCreation("ObjectLinks");
	//            }, "TaskObjects");
	//            break;
	//        }
	//    },
	//    fnHandleNoTextCreation: function (e) {
	//        var t = this;
	//        var m = this.oModel2.getData();
	//        var g = t.oGenericAttachmentComponent ? t.oGenericAttachmentComponent.view.byId("uploadCollection") : null;
	//        switch (e) {
	//        case "Comments":
	//            var c = t.byId("MIBCommentList");
	//            if (m.CommentsCount && m.CommentsCount > 0)
	//                c.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//            else if (m.CommentsCount && m.CommentsCount == 0)
	//                c.setNoDataText(t.i18nBundle.getText("view.CreateComment.noComments"));
	//            break;
	//        case "Attachments":
	//            var a = t.isGenericComponentRendered ? t.oAttachmentComponentView.byId("uploadCollection") : g;
	//            if (a) {
	//                if (m.AttachmentsCount && m.AttachmentsCount > 0)
	//                    a.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//                else if (m.AttachmentsCount && m.AttachmentsCount == 0)
	//                    a.setNoDataText(t.i18nBundle.getText("view.Attachments.noAttachments"));
	//            } else {
	//                return;
	//            }
	//            break;
	//        case "ProcessingLogs":
	//            var h = t.byId("timeline");
	//            if (m.ProcessingLogsCount && m.ProcessingLogsCount > 0)
	//                h.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//            else if (m.ProcessingLogsCount && m.ProcessingLogsCount == 0)
	//                h.setNoDataText(t.i18nBundle.getText("view.ProcessLogs.noProcessLog"));
	//            break;
	//        case "ObjectLinks":
	//            var o = t.byId("MIBObjectLinksList");
	//            if (m.ObjectLinksCount && m.ObjectLinksCount > 0)
	//                o.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//            else if (m.ObjectLinksCount && m.ObjectLinksCount == 0)
	//                o.setNoDataText(t.i18nBundle.getText("view.ObjectLinks.noObjectLink"));
	//            break;
	//        default:
	//            break;
	//        }
	//    },
	//    fnClearCachedData: function () {
	//        this.oModel2.setProperty("/AttachmentsCount", "");
	//        this.oModel2.setProperty("/CommentsCount", "");
	//        this.oModel2.setProperty("/ProcessingLogsCount", "");
	//        this.oModel2.setProperty("/ObjectLinksCount", "");
	//        this.oModel2.setProperty("/ProcessingLogs", "");
	//        this.oModel2.setProperty("/Attachments", "");
	//        this.oModel2.setProperty("/Comments", "");
	//    },
	//    fnFetchProcessingLogs: function () {
	//        var m = this.oModel2.getData();
	//        var s = function (d) {
	//            this.oModel2.setProperty("/ProcessingLogs", d);
	//            this.byId("tabBar").rerender();
	//        };
	//        this.oDataManager.fnGetDataWithCountSupport(null, m.SAP__Origin, m.InstanceID, false, jQuery.proxy(s, this), "ProcessingLogs");
	//    },
	//    fnFetchObjectLinks: function () {
	//        var m = this.oModel2.getData();
	//        var o = 0;
	//        var s = function (d) {
	//            for (var i = 0; i < d.results.length; i++) {
	//                if (!d.results[i].Label) {
	//                    o = o + 1;
	//                    d.results[i].Label = this.i18nBundle.getText("object.link.label") + " " + o;
	//                }
	//            }
	//            this.oModel2.setProperty("/ObjectLinks", d);
	//        };
	//        this.oDataManager.fnGetDataWithCountSupport(null, m.SAP__Origin, m.InstanceID, false, jQuery.proxy(s, this), "TaskObjects");
	//    },
	//    fnReadCommentsAndCreatedByDetails: function () {
	//        var t = this;
	//        var p = this.sCtxPath + "/Comments";
	//        var m = this.oModel2.getData();
	//        var s = function (d) {
	//            m.Comments = d;
	//            t.oModel2.setData(m);
	//            t.byId("MIBCommentList").rerender();
	//        };
	//        this.oDataManager.fnReadCommentsAndCreatedByDetails(p, { $expand: "CreatedByDetails" }, s);
	//    },
	//    onSupportInfoOpenEvent: function (c, e, s) {
	//        if (s.source === "MAIN") {
	//            var C = null;
	//            var I = this.oModel2.getData();
	//            if (this.aTaskDefinitionData) {
	//                for (var i = 0; i < this.aTaskDefinitionData.length; i++) {
	//                    if (I && I.TaskDefinitionID === this.aTaskDefinitionData[i].TaskDefinitionID) {
	//                        if (this.aTaskDefinitionData[i].CustomAttributeDefinitionData.results) {
	//                            C = this.aTaskDefinitionData[i].CustomAttributeDefinitionData.results;
	//                        }
	//                    }
	//                }
	//            }
	//            cross.fnd.fiori.inbox.util.SupportInfo.setTask(I, C);
	//        }
	//    },
	//    _updateTaskAfterAddAction: function (i, d, c, h) {
	//        var t = this;
	//        var b = d.__batchResponses;
	//        var a = b[0];
	//        if (a.hasOwnProperty("data") && a.statusCode >= "200" && a.statusCode < "300") {
	//            t.oModel2.setProperty(c, a.data);
	//            if (a.data > 0 && !i[h]) {
	//                t.oModel2.setProperty("/" + h, true);
	//            }
	//        }
	//        if (i.TaskSupports.ProcessingLogs) {
	//            var p = b[1];
	//            if (p.hasOwnProperty("data") && p.statusCode >= "200" && p.statusCode < "300") {
	//                t.oModel2.setProperty("/ProcessingLogsCount", p.data);
	//            }
	//            this.oModel2.setProperty("/ProcessingLogs", "");
	//        }
	//    }
});