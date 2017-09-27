<?php
/*
 * Template Name: Os-App
 */
?>
<!doctupe html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>
        <?php wp_title('|', 'true', 'right');
            bloginfo('name');
        ?>
    </title>
<!--    <base href="http://angular/myPage/wordpress/">-->
    <base href="<?php echo get_site_url();?>">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="<?php bloginfo('description');?>">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=La+Belle+Aurore" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body>

<app-root>loading..</app-root>

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/dist/inline.bundle.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/dist/polyfills.bundle.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/dist/styles.bundle.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/dist/vendor.bundle.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/dist/main.bundle.js"></script>

<?php wp_footer(); ?>
</body>
</html>