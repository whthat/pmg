<?php

function pmg_sub_frame_alpha_preprocess_node(&$vars) {
  $date_format = format_date($vars['created'], $type = 'custom', $format = 'M - d - Y');
  if(module_exists('comment')) {
    // if we have comments enabled, append the comment count to the submitted data
    $comment_num = isset($vars['comment_count']) ? $vars['comment_count'] : FALSE;
    
    $comment_count = l(format_plural($comment_num, '1 comment', '@count comments'), 'node/' . $vars['nid'], array('fragment' => 'comments'));
    $vars['submitted'] = t('!datetime | !comment_count', array('!datetime' => $date_format, '!comment_count' => $comment_count));
  }
  else {
    // otherwise, just format it up a bit nicer
    $vars['submitted'] = t('!datetime', array('!datetime' => $date_format));
  }
}
