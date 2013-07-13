<?php
// $Id: menu_icons_css_item.tpl.php,v 1.3 2010/02/15 15:35:48 skilip Exp $

/**
 * @file
 *
 * Template file for generating the CSS file used for the menu-items
 */

/**
 * Variables:
 * $mlid
 * $path
 *
 * @author dylan@opensourcery.com
 */
 $size = $size + 4;
?>
a.menu-<?php print $mlid ?>, ul.links li.menu-<?php print $mlid ?> a {
  background-image: url(<?php print $path ?>);
  padding-<?php print "$pos:$size"?>px !important;
  background-repeat: no-repeat;
  background-position: <?php print $pos?>;
  margin-left: 2px;
}

