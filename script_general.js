(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarColor":"#000000","id":"rootPlayer","backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"defaultLocale":"pt","history":{},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"speechOnTooltip":false},"name":"Player648","locales":{"pt":"locale/pt.txt"}},"layout":"absolute","hash": "c2f5a3260ab01392e57f775c837023f5d68e90c65afd1cbe11a753409dac2254", "definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD"}]},{"arrowKeysAction":"translate","class":"PanoramaPlayer","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true},{"toolTipFontSize":"1.11vmin","vrThumbstickRotationStep":20,"toolTipFontFamily":"Arial","progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontColor":"#606060","firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"progressBorderRadius":2,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"progressLeft":"33%","vrPointerSelectionTime":2000,"subtitlesTop":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"propagateClick":false,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"toolTipPaddingRight":6,"playbackBarHeadHeight":15,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"progressRight":"33%","surfaceReticleColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","toolTipBackgroundColor":"#F6F6F6","subtitlesBorderColor":"#FFFFFF","toolTipPaddingTop":4,"progressBarBorderColor":"#000000","id":"MainViewer","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"subtitlesFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderColor":"#767676","class":"ViewerArea","playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipShadowColor":"#333138","minHeight":50,"playbackBarHeadWidth":6,"minWidth":100,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"subtitlesGap":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesBackgroundColor":"#000000","vrPointerColor":"#FFFFFF","toolTipPaddingLeft":6,"width":"100%","playbackBarHeadShadowOpacity":0.7,"height":"100%","toolTipTextShadowColor":"#000000","progressBottom":10,"subtitlesTextShadowVerticalLength":1,"progressBorderSize":0,"progressHeight":2,"vrPointerSelectionColor":"#FF6600"},{"id":"panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_camera","class":"PanoramaCamera","initialSequence":"this.sequence_126055F3_3555_7473_41C3_D576C944C024","enterPointingToHorizon":true,"initialPosition":{"yaw":0.26,"pitch":1.05,"class":"PanoramaCameraPosition"}},{"vfov":180,"hfovMax":130,"data":{"label":"BS WAVE"},"overlays":["this.overlay_06B1F314_3554_CDB5_4189_24EE7BAA4E9C","this.overlay_7DF1B1C9_3ADC_CC9F_41C8_64860283E3E6","this.overlay_718EE1D8_3ADC_CCBD_41AB_9F53748343A5","this.overlay_70FCBBC2_3ADC_BC8D_41C7_FE6B22E1BDDF","this.overlay_7E02CC9C_3AD4_D4B5_41BB_D2AD02D59145","this.overlay_7E41C0EB_3AD5_4C93_41BA_BE4B422FC3A6","this.overlay_7964DDDD_3F55_74B7_41BB_3121B413F762","this.overlay_74EAF371_3555_CD8F_41C9_C0A0E442BF81"],"hfovMin":"120%","id":"panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD","frames":[{"thumbnailUrl":"media/panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_t.webp","cube":{"levels":[{"tags":"ondemand","rowCount":6,"height":3072,"colCount":36,"width":18432,"class":"TiledImageResourceLevel","url":"media/panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_0/{face}/0/{row}_{column}.webp"},{"tags":"ondemand","rowCount":3,"height":1536,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","url":"media/panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_0/{face}/1/{row}_{column}.webp"},{"tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_0/{face}/2/{row}_{column}.webp"},{"tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_0/{face}/3/{row}_{column}.webp"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_t.webp","label":trans('panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD.label'),"hfov":360,"class":"Panorama"},{"id":"sequence_126055F3_3555_7473_41C3_D576C944C024","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"data":{"label":"Poligono"},"items":[{"yaw":-34.69,"pitch":-71.97,"distance":50,"data":{"label":"Poligono"},"vfov":39.79,"hfov":51.92,"image":{"levels":[{"height":943,"width":1269,"class":"ImageResourceLevel","url":"media/panorama_126E4CFB_3555_5473_41C0_E7EB22A657AD_HS_g8brkmhr.webp"}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_06B1F314_3554_CDB5_4189_24EE7BAA4E9C","maps":[],"areas":["this.HotspotPanoramaOverlayArea_01C6B34B_3554_CD93_41C2_76780C64DEA3"],"class":"HotspotPanoramaOverlay"},{"data":{"label":"Mandara By Yoo"},"items":[{"yaw":5.29,"pitch":4.47,"distance":50,"scaleMode":"fit_inside","data":{"label":"Mandara By Yoo"},"vfov":15.85,"hfov":13.16,"image":"this.res_7ED6F966_3EAC_BD95_41BD_6B7EBA278F47","class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_7DF1B1C9_3ADC_CC9F_41C8_64860283E3E6","maps":[],"areas":["this.HotspotPanoramaOverlayArea_7B51F23B_3ADC_CFF3_41AE_1F20BC88BD4A"],"class":"HotspotPanoramaOverlay"},{"data":{"label":"Mandara Kauai"},"items":[{"yaw":18.06,"pitch":5.14,"distance":50,"scaleMode":"fit_inside","data":{"label":"Mandara Kauai"},"vfov":17.3,"hfov":8.82,"image":"this.res_7ED6B966_3EAC_BD95_419C_349BFB3E8487","class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_718EE1D8_3ADC_CCBD_41AB_9F53748343A5","maps":[],"areas":["this.HotspotPanoramaOverlayArea_7B14623E_3ADC_CFF5_41C7_AB4AA68936F0"],"class":"HotspotPanoramaOverlay"},{"data":{"label":"Golf Ville"},"items":[{"yaw":146.63,"pitch":-12.15,"distance":50,"scaleMode":"fit_inside","data":{"label":"Golf Ville"},"vfov":27.76,"hfov":19.42,"image":"this.res_7ED63967_3EAC_BD93_41CA_CB859E381E85","class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_70FCBBC2_3ADC_BC8D_41C7_FE6B22E1BDDF","maps":[],"areas":["this.HotspotPanoramaOverlayArea_7B78BC29_3ADC_BB9F_41B0_1DF095CFF096"],"class":"HotspotPanoramaOverlay"},{"data":{"label":"Porto das Dunas"},"items":[{"yaw":165.46,"pitch":8.66,"distance":50,"scaleMode":"fit_inside","data":{"label":"Porto das Dunas"},"vfov":21.93,"hfov":12.3,"image":"this.res_7ED9F967_3EAC_BD93_41CB_1BCC0FB47F01","class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_7E02CC9C_3AD4_D4B5_41BB_D2AD02D59145","maps":[],"areas":["this.HotspotPanoramaOverlayArea_7BA84D0D_3AD4_D597_41C7_98EB0DB3A617"],"class":"HotspotPanoramaOverlay"},{"data":{"label":"Beach Park"},"items":[{"yaw":-178.45,"pitch":0.55,"distance":50,"scaleMode":"fit_inside","data":{"label":"Beach Park"},"vfov":21.46,"hfov":12.95,"image":"this.res_7ED97967_3EAC_BD93_41CA_DE004EFB6A1D","class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_7E41C0EB_3AD5_4C93_41BA_BE4B422FC3A6","maps":[],"areas":["this.HotspotPanoramaOverlayArea_7B4CC144_3AD5_4D95_41C1_3F377EE4F1AD"],"class":"HotspotPanoramaOverlay"},{"data":{"label":"Logo BS Wave"},"items":[{"yaw":-27.15,"pitch":-66.93,"distance":50,"scaleMode":"fit_inside","data":{"label":"Logo BS Wave"},"vfov":31.8,"hfov":31.79,"roll":-19.02,"image":"this.res_799E7EBD_3F5C_B4F7_41B7_6DAA0FC0DC9A","class":"HotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_7964DDDD_3F55_74B7_41BB_3121B413F762","maps":[],"areas":["this.HotspotPanoramaOverlayArea_78E15E45_3F55_7797_41C2_15F3B5F30994"],"class":"HotspotPanoramaOverlay"},{"id":"overlay_74EAF371_3555_CD8F_41C9_C0A0E442BF81","intensity":0.48,"class":"RainPanoramaOverlay","color":"#FFFFFF"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_01C6B34B_3554_CD93_41C2_76780C64DEA3","mapColor":"image","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":512,"width":306,"class":"ImageResourceLevel","url":"media/res_7ED6F966_3EAC_BD95_41BD_6B7EBA278F47_0.webp"}],"id":"res_7ED6F966_3EAC_BD95_41BD_6B7EBA278F47","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_7B51F23B_3ADC_CFF3_41AE_1F20BC88BD4A","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":473,"width":284,"class":"ImageResourceLevel","url":"media/res_7ED6B966_3EAC_BD95_419C_349BFB3E8487_0.webp"}],"id":"res_7ED6B966_3EAC_BD95_419C_349BFB3E8487","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_7B14623E_3ADC_CFF5_41C7_AB4AA68936F0","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":904,"width":540,"class":"ImageResourceLevel","url":"media/res_7ED63967_3EAC_BD93_41CA_CB859E381E85_0.webp"}],"id":"res_7ED63967_3EAC_BD93_41CA_CB859E381E85","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_7B78BC29_3ADC_BB9F_41B0_1DF095CFF096","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":663,"width":396,"class":"ImageResourceLevel","url":"media/res_7ED9F967_3EAC_BD93_41CB_1BCC0FB47F01_0.webp"}],"id":"res_7ED9F967_3EAC_BD93_41CB_1BCC0FB47F01","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_7BA84D0D_3AD4_D597_41C7_98EB0DB3A617","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":697,"width":416,"class":"ImageResourceLevel","url":"media/res_7ED97967_3EAC_BD93_41CA_DE004EFB6A1D_0.webp"}],"id":"res_7ED97967_3EAC_BD93_41CA_DE004EFB6A1D","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_7B4CC144_3AD5_4D95_41C1_3F377EE4F1AD","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":592,"width":591,"class":"ImageResourceLevel","url":"media/res_799E7EBD_3F5C_B4F7_41B7_6DAA0FC0DC9A_0.webp"}],"id":"res_799E7EBD_3F5C_B4F7_41B7_6DAA0FC0DC9A","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_78E15E45_3F55_7797_41C2_15F3B5F30994","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"backgroundColorRatios":[0],"start":"this.init()","class":"Player","watermark":false,"children":["this.MainViewer"],"propagateClick":false,"minHeight":0,"scripts":{"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMainViewer":TDV.Tour.Script.getMainViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setValue":TDV.Tour.Script.setValue,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getOverlays":TDV.Tour.Script.getOverlays,"getPixels":TDV.Tour.Script.getPixels,"openLink":TDV.Tour.Script.openLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"disableVR":TDV.Tour.Script.disableVR,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"init":TDV.Tour.Script.init,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getKey":TDV.Tour.Script.getKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"enableVR":TDV.Tour.Script.enableVR,"startMeasurement":TDV.Tour.Script.startMeasurement,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"isPanorama":TDV.Tour.Script.isPanorama,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"toggleVR":TDV.Tour.Script.toggleVR,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"createTween":TDV.Tour.Script.createTween,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"clone":TDV.Tour.Script.clone,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"mixObject":TDV.Tour.Script.mixObject,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizShowScore":TDV.Tour.Script.quizShowScore,"showWindow":TDV.Tour.Script.showWindow,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"initQuiz":TDV.Tour.Script.initQuiz,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"executeJS":TDV.Tour.Script.executeJS,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"registerKey":TDV.Tour.Script.registerKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playAudioList":TDV.Tour.Script.playAudioList,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"quizFinish":TDV.Tour.Script.quizFinish,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizStart":TDV.Tour.Script.quizStart,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setLocale":TDV.Tour.Script.setLocale},"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"height":"100%","width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Mon Feb 24 2025