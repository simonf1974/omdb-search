!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=function(){var e,t,n;fetch((e=$("#movie").val().toString(),t=$("#year").val().toString(),n="http://www.omdbapi.com/?apikey=5aede68a&s="+e+"&page="+$("#page").val().toString()+"&type=movie",4===t.length&&(n+="&y="+t),n)).then((function(e){return e.json()})).then((function(e){!function(e){var t=$("#page"),n=t.val().toString();t.empty();for(var r=e/10+1,o=1;o<=r;o++)t.append(new Option(o.toString(),o.toString()));t.val(n)}(e.totalResults),function(e){if(void 0!==e){var t=$("#list");t.empty(),e.forEach((function(e){var n=document.createElement("li"),r=e.Poster.includes("http")?e.Poster:"./assets/movie-placeholder.png";n.innerHTML='<p class="title">'+e.Title+" ("+e.Year+')<p><img src="'+r+'" alt="">',t.append(n)}))}}(e.Search)}))},r=function(){var e=$("#page");e.empty(),e.append(new Option("1","1")),e.val("1")};$("#movie").change((function(){r()})),$("#year").change((function(){r()})),$("#page").change((function(){n()})),$(document).ready((function(){$(document).on("submit","#form",(function(){return n(),!1}))}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4udHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJnZXRNb3ZpZURhdGEiLCJtb3ZpZVNlYXJjaCIsInllYXIiLCJ1cmwiLCJmZXRjaCIsIiQiLCJ2YWwiLCJ0b1N0cmluZyIsImxlbmd0aCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibnVtT2ZNb3ZpZXMiLCJwYWdlc0NvbWJvIiwiY3VycmVudFBhZ2UiLCJlbXB0eSIsInBhZ2VzIiwiYXBwZW5kIiwiT3B0aW9uIiwicG9wdWxhdGVQYWdlcyIsInRvdGFsUmVzdWx0cyIsIm1vdmllcyIsInVuZGVmaW5lZCIsInVsIiwiZm9yRWFjaCIsIm1vdmllIiwibGkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbWciLCJQb3N0ZXIiLCJpbmNsdWRlcyIsImlubmVySFRNTCIsIlRpdGxlIiwiWWVhciIsImRpc3BsYXlNb3ZpZXMiLCJTZWFyY2giLCJpbml0UGFnZXMiLCJjaGFuZ2UiLCJyZWFkeSIsIm9uIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLGdCQ2xGckQsSUF1Q01DLEVBQWUsV0F2Q0EsSUFDYkMsRUFHQUMsRUFNRkMsRUE4QkpDLE9BdkNNSCxFQUFzQkksRUFBRSxVQUMzQkMsTUFDQUMsV0FDR0wsRUFBZUcsRUFBRSxTQUNwQkMsTUFDQUMsV0FJQ0osRUFBYyw2Q0FBNkNGLEVBQVcsU0FIckRJLEVBQUUsU0FDcEJDLE1BQ0FDLFdBQ29GLGNBQ25FLElBQWhCTCxFQUFLTSxTQUFjTCxHQUFPLE1BQU1ELEdBRTdCQyxJQTRCSk0sTUFBSyxTQUFBQyxHQUFZLE9BQUFBLEVBQVNDLFVBQzFCRixNQUFLLFNBQUFHLElBZFksU0FBQ0MsR0FDckIsSUFBTUMsRUFBYVQsRUFBRSxTQUNmVSxFQUFzQkQsRUFBV1IsTUFBTUMsV0FDN0NPLEVBQVdFLFFBRVgsSUFEQSxJQUFNQyxFQUFRSixFQUFjLEdBQUssRUFDeEI3QyxFQUFZLEVBQUdBLEdBQUtpRCxFQUFPakQsSUFDbEM4QyxFQUFXSSxPQUFPLElBQUlDLE9BQU9uRCxFQUFFdUMsV0FBWXZDLEVBQUV1QyxhQUUvQ08sRUFBV1IsSUFBSVMsR0FPWEssQ0FBY1IsRUFBS1MsY0EzQkgsU0FBQUMsR0FDcEIsUUFBZUMsSUFBWEQsRUFBSixDQUNBLElBQU1FLEVBQUtuQixFQUFFLFNBQ2JtQixFQUFHUixRQUNITSxFQUFPRyxTQUFRLFNBQUFDLEdBQ2IsSUFBSUMsRUFBS0MsU0FBU0MsY0FBYyxNQUMxQkMsRUFBTUosRUFBTUssT0FBT0MsU0FBUyxRQUFVTixFQUFNSyxPQUFTLGlDQUMzREosRUFBR00sVUFBWSxvQkFBb0JQLEVBQU1RLE1BQUssS0FBS1IsRUFBTVMsS0FBSSxpQkFBaUJMLEVBQUcsWUFDakZOLEVBQUdOLE9BQU9TLE9Bb0JSUyxDQUFjeEIsRUFBS3lCLFlBSW5CQyxFQUFZLFdBQ2hCLElBQU14QixFQUFhVCxFQUFFLFNBQ3JCUyxFQUFXRSxRQUNYRixFQUFXSSxPQUFPLElBQUlDLE9BQU8sSUFBSyxNQUNsQ0wsRUFBV1IsSUFBSSxNQUdqQkQsRUFBRSxVQUFVa0MsUUFBTyxXQUNqQkQsT0FHRmpDLEVBQUUsU0FBU2tDLFFBQU8sV0FDaEJELE9BR0ZqQyxFQUFFLFNBQVNrQyxRQUFPLFdBQ2hCdkMsT0FHRkssRUFBRXVCLFVBQVVZLE9BQU0sV0FDaEJuQyxFQUFFdUIsVUFBVWEsR0FBRyxTQUFVLFNBQVMsV0FFaEMsT0FEQXpDLEtBQ08iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGNvbnN0cnVjdFVybCA9ICgpID0+IHtcclxuICBjb25zdCBtb3ZpZVNlYXJjaDogc3RyaW5nID0gJChcIiNtb3ZpZVwiKVxyXG4gICAgLnZhbCgpXHJcbiAgICAudG9TdHJpbmcoKTtcclxuICBjb25zdCB5ZWFyOiBzdHJpbmcgPSAkKFwiI3llYXJcIilcclxuICAgIC52YWwoKVxyXG4gICAgLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgcGFnZTogc3RyaW5nID0gJChcIiNwYWdlXCIpXHJcbiAgICAudmFsKClcclxuICAgIC50b1N0cmluZygpO1xyXG4gIGxldCB1cmw6IHN0cmluZyA9IGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NWFlZGU2OGEmcz0ke21vdmllU2VhcmNofSZwYWdlPSR7cGFnZX0mdHlwZT1tb3ZpZWA7XHJcbiAgaWYgKHllYXIubGVuZ3RoID09PSA0KSB1cmwgKz0gYCZ5PSR7eWVhcn1gO1xyXG5cclxuICByZXR1cm4gdXJsO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheU1vdmllcyA9IG1vdmllcyA9PiB7XHJcbiAgaWYgKG1vdmllcyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgY29uc3QgdWwgPSAkKFwiI2xpc3RcIik7XHJcbiAgdWwuZW1wdHkoKTtcclxuICBtb3ZpZXMuZm9yRWFjaChtb3ZpZSA9PiB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBpbWcgPSBtb3ZpZS5Qb3N0ZXIuaW5jbHVkZXMoXCJodHRwXCIpID8gbW92aWUuUG9zdGVyIDogXCIuL2Fzc2V0cy9tb3ZpZS1wbGFjZWhvbGRlci5wbmdcIjtcclxuICAgIGxpLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInRpdGxlXCI+JHttb3ZpZS5UaXRsZX0gKCR7bW92aWUuWWVhcn0pPHA+PGltZyBzcmM9XCIke2ltZ31cIiBhbHQ9XCJcIj5gO1xyXG4gICAgdWwuYXBwZW5kKGxpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHBvcHVsYXRlUGFnZXMgPSAobnVtT2ZNb3ZpZXM6IG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IHBhZ2VzQ29tYm8gPSAkKFwiI3BhZ2VcIik7XHJcbiAgY29uc3QgY3VycmVudFBhZ2U6IHN0cmluZyA9IHBhZ2VzQ29tYm8udmFsKCkudG9TdHJpbmcoKTtcclxuICBwYWdlc0NvbWJvLmVtcHR5KCk7XHJcbiAgY29uc3QgcGFnZXMgPSBudW1PZk1vdmllcyAvIDEwICsgMTtcclxuICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDw9IHBhZ2VzOyBpKyspIHtcclxuICAgIHBhZ2VzQ29tYm8uYXBwZW5kKG5ldyBPcHRpb24oaS50b1N0cmluZygpLCBpLnRvU3RyaW5nKCkpKTtcclxuICB9XHJcbiAgcGFnZXNDb21iby52YWwoY3VycmVudFBhZ2UpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TW92aWVEYXRhID0gKCkgPT4ge1xyXG4gIGZldGNoKGNvbnN0cnVjdFVybCgpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIHBvcHVsYXRlUGFnZXMoZGF0YS50b3RhbFJlc3VsdHMpO1xyXG4gICAgICBkaXNwbGF5TW92aWVzKGRhdGEuU2VhcmNoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdFBhZ2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2VzQ29tYm8gPSAkKFwiI3BhZ2VcIik7XHJcbiAgcGFnZXNDb21iby5lbXB0eSgpO1xyXG4gIHBhZ2VzQ29tYm8uYXBwZW5kKG5ldyBPcHRpb24oXCIxXCIsIFwiMVwiKSk7XHJcbiAgcGFnZXNDb21iby52YWwoXCIxXCIpO1xyXG59O1xyXG5cclxuJChcIiNtb3ZpZVwiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgaW5pdFBhZ2VzKCk7XHJcbn0pO1xyXG5cclxuJChcIiN5ZWFyXCIpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICBpbml0UGFnZXMoKTtcclxufSk7XHJcblxyXG4kKFwiI3BhZ2VcIikuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gIGdldE1vdmllRGF0YSgpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoZG9jdW1lbnQpLm9uKFwic3VibWl0XCIsIFwiI2Zvcm1cIiwgKCkgPT4ge1xyXG4gICAgZ2V0TW92aWVEYXRhKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9